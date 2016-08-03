class StaticPagesController < ApplicationController
  def index
  end

  def inicio
  end

  def ingles
  end

  def ciencia
  end

  def catering
  end

  def contacto
  end

  def thank_you
    @name = params[:name]
    @email = params[:email]
    @message = params[:message]
    ActionMailer::Base.mail(:from => @email,
      :to => 'waseemhijodenawaz@yahoo.es',
      :subject => "A new contact form message from #{@name}",
      :body => @message).deliver_now
  end
end
