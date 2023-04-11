require 'rails_helper'

RSpec.describe Testung2, type: :model do
  let(:testung2) do
    build(:testung2)
  end

  describe 'Assocations' do
    it { is_expected.to belong_to(:testing1).counter_cache(true) }
  end

  describe 'Valid subject' do
    it 'valid testung2' do
      expect(testung2).to be_valid
    end
  end

  describe 'Format option validations' do
    it { expect(testung2.email).to match(URI::MailTo::EMAIL_REGEXP) }
    it { expect(Faker::Lorem.sentence).not_to match(URI::MailTo::EMAIL_REGEXP) }
  end

  describe 'Invalid length validations' do
    it 'validates email max length' do
      testung2.email = 'a' * 256
      expect(testung2).not_to be_valid
    end
  end

  describe 'Validate uniqueness' do
    subject { build(:testung2) }

    it { is_expected.to validate_uniqueness_of(:email) }
  end
end
