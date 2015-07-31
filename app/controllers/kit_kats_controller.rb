class KitKatsController < ApplicationController
	def index
		@kitkats = KitKat.all
	end
end
