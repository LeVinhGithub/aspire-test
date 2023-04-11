require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) do
    build(:user)
  end

  describe 'Assocations' do
    it { is_expected.to have_many(:test2s) }
  end

  describe 'Valid subject' do
    it 'valid user' do
      expect(user).to be_valid
    end
  end

  describe 'Invalid length validations' do
    it 'validates name max length' do
      user.name = 'a' * 256
      expect(user).not_to be_valid
    end

    it 'validates introduce max length' do
      user.introduce = 'a' * 65_536
      expect(user).not_to be_valid
    end
  end
end
