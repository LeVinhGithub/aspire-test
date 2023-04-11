require 'rails_helper'

RSpec.describe Test2, type: :model do
  let(:test2) do
    build(:test2)
  end

  describe 'Assocations' do
    it { is_expected.to belong_to(:user).counter_cache(true) }
  end

  describe 'Valid subject' do
    it 'valid test2' do
      expect(test2).to be_valid
    end
  end

  describe 'Format option validations' do
    it { expect(test2.email).to match(URI::MailTo::EMAIL_REGEXP) }
    it { expect(Faker::Lorem.sentence).not_to match(URI::MailTo::EMAIL_REGEXP) }
  end

  describe 'Invalid length validations' do
    it 'validates email max length' do
      test2.email = 'a' * 256
      expect(test2).not_to be_valid
    end
  end

  describe 'Validate uniqueness' do
    subject { build(:test2) }

    it { is_expected.to validate_uniqueness_of(:email) }
  end
end
