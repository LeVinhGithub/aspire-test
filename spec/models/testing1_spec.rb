require 'rails_helper'

RSpec.describe Testing1, type: :model do
  let(:testing1) do
    build(:testing1)
  end

  describe 'Assocations' do
    it { is_expected.to have_many(:testung2s) }

    it { is_expected.to have_one_attached(:cfile) }
  end

  describe 'Valid subject' do
    it 'valid testing1' do
      expect(testing1).to be_valid
    end
  end

  describe 'Format option validations' do
    it { expect(testing1.cstring).to match(ConstantValidatable::HIRAGANA_VALIDATION_FORMAT) }
    it { expect(Faker::Name.name).not_to match(ConstantValidatable::HIRAGANA_VALIDATION_FORMAT) }

    it { expect(testing1.stext).to match(ConstantValidatable::HIRAGANA_VALIDATION_FORMAT) }
    it { expect(Faker::Name.name).not_to match(ConstantValidatable::HIRAGANA_VALIDATION_FORMAT) }
  end

  describe 'Invalid length validations' do
    it 'validates cstring max length' do
      testing1.cstring = 'a' * 256
      expect(testing1).not_to be_valid
    end

    it 'validates stext max length' do
      testing1.stext = 'a' * 65_536
      expect(testing1).not_to be_valid
    end
  end

  describe 'Invalid numeric validations' do
    it 'validates cint greater than / equal to value' do
      testing1.cint = -2_147_483_658.0
      expect(testing1).not_to be_valid
    end

    it 'validates cint less than / equal to value' do
      testing1.cint = 2_147_483_657.0
      expect(testing1).not_to be_valid
    end

    it 'validates cfloat greater than / equal to value' do
      testing1.cfloat = -3.402823466e+38
      expect(testing1).not_to be_valid
    end

    it 'validates cfloat less than / equal to value' do
      testing1.cfloat = 3.402823466e+38
      expect(testing1).not_to be_valid
    end
  end

  describe 'Invalid date validations' do
    it 'validates cdate past date' do
      testing1.cdate = Date.tomorrow
      expect(testing1).not_to be_valid
    end
  end

  describe 'Invalid datetime validations' do
    it 'validates cdatetime invalid future datetime' do
      testing1.cdatetime = Time.zone.now.yesterday.to_time
      expect(testing1).not_to be_valid
    end
  end

  describe 'Invalid boolean validations' do
    it { expect(testing1.c).to be_in([true, false]) }

    it 'does not a valid boolean' do
      testing1 = described_class.new
      testing1.c = nil

      expect(testing1.c).not_to be_in([true, false])
    end
  end

  describe 'Invalid enum validations' do
    it 'validates cenump enum value' do
      testing1 = described_class.new
      expect { testing1.cenump = 'invalid_enum' }.to raise_error(ArgumentError, "'invalid_enum' is not a valid cenump")
    end
  end

  describe 'Validate uniqueness' do
    subject { build(:testing1) }

    it { is_expected.to validate_uniqueness_of(:cstring) }

    it { is_expected.to validate_uniqueness_of(:stext) }

    it { is_expected.to validate_uniqueness_of(:cint) }

    it { is_expected.to validate_uniqueness_of(:cfloat) }

    it { is_expected.to validate_uniqueness_of(:cdate) }

    it { is_expected.to validate_uniqueness_of(:cdatetime) }

    it { is_expected.to validate_uniqueness_of(:cenump) }
  end

  describe 'Valid file attachment' do
    it 'validates cfile content types' do
      expect(testing1).to validate_content_type_of(:cfile).allowing(%w[image/png image/jpg image/jpeg image/gif
                                                                       image/svg+xml])
    end
  end
end
