module ApplicationHelper
  def ability?(user, class_name)
    if user.present?
      if user.admin
        return true
      end
    else
      return false
    end
  end
end
