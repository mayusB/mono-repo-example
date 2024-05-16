class UsersController < AdminController

  skip_before_action :verify_authenticity_token, only: :revert_identity, :check_privilege
  skip_before_action :set_current_workspace, :check_user_workspace, only: [:portal_preference, :revert_identity, :business_rules_user_details]
  
  # Match the list of methods in this filter 
  # with function definitions within the class,
  # across multiple files, and also in the parent
  # controller 
  skip_before_action :check_privilege, only: [:portal_preference, :business_rules_user_details]
  
  before_action :check_current_user, only: [:profile_image, :profile_image_no_blank]
  before_action :set_selected_tab
  skip_before_action :load_object , only: [ :show, :edit ]
  before_action :load_items, only: :block 
  before_action :validate_params, only: :portal_preference
  
  # ruleid: action-in-skip-before
  def business_rules_user_details
    puts("Hi")
  end

  # ruleid: action-in-skip-before
  def portal_preference
    puts("Hi")
  end

  # ok: action-in-skip-before
  def method_not_in_the_filter
    puts("Hi")
  end

end
