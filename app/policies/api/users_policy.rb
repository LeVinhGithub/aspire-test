class Api::UsersPolicy < ApplicationPolicy

def show?
(user.is_a?(User) && record.id == user&.id && (record.role == 'admin')
end
end