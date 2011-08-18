require 'resque_helpers'

class ApplicationController < ActionController::Base
  protect_from_forgery

  layout :layout?

  before_filter :set_gitsha_header, :set_mobile_cookie
  after_filter  :prepare_unobtrusive_flash

  protected

    def repositories
      @repositories ||= Repository.timeline
    end
    helper_method :repositories

    def workers
      @workers ||= ResqueHelpers.active_workers
    end
    helper_method :workers

    def jobs
      @jobs ||= ResqueHelpers.queued_jobs(params[:queue])
    end
    helper_method :jobs

    def set_gitsha_header
      headers['X-GIT_SHA'] = ENV['GIT_SHA'] if ENV['GIT_SHA']
    end

    def is_mobile?
      cookies[:mobile] || request.user_agent =~ /Mobile|webOS/
    end

  private

    def layout?
      is_mobile? ? 'mobile' : 'application'
    end

    def set_mobile_cookie
      cookies[:mobile] = params[:mobile] if params[:mobile]
    end

end
