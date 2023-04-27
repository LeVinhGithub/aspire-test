require 'swagger_helper'

RSpec.describe 'CompanyEmployee', type: :request do
  # jitera-hook-for-rswag-example
  path '/api/company_employees/id' do
    delete 'Destroy company_employees' do
      tags 'company_employees'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'delete' do
        examples 'application/json' => {}

        let(:resource) { create(:company_employee) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/company_employees/id' do
    put 'Update  company_employees' do
      tags 'company_employees'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          company_employees: {
            type: :object,
            properties: {

              company_id: {
                type: :integer
              },

              full_name: {
                type: :string
              },

              profile: {
                type: :string
              },

              photo: {
                type: :file
              },

              is_high_rank_employee: {
                type: :boolean
              }

            }
          },

          companies: {
            type: :object,
            properties: {

              name: {
                type: :string
              },

              logo: {
                type: :file
              },

              location: {
                type: :string
              },

              launched_year: {
                type: :string
              },

              business_details: {
                type: :text
              },

              number_of_employees: {
                type: :integer
              },

              industry_id: {
                type: :integer
              },

              mission: {
                type: :text
              },

              vision: {
                type: :text
              },

              value: {
                type: :text
              },

              representative_photo: {
                type: :file
              },

              representative_profile: {
                type: :text
              },

              ipo: {
                type: :string
              },

              representative_name: {
                type: :string
              },

              slug: {
                type: :string
              },

              image: {
                type: :file
              },

              capital: {
                type: :string
              }

            }
          }

        }
      }
      response '200', 'update' do
        examples 'application/json' => {

          'company_employee' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'company_id' => 'INTEGER',

            'company' => {

              'id' => 'INTEGER',

              'created_at' => 'DATETIME',

              'updated_at' => 'DATETIME',

              'name' => 'STRING',

              'logo' => 'FILE',

              'location' => 'STRING',

              'launched_year' => 'STRING',

              'business_details' => 'TEXT',

              'number_of_employees' => 'INTEGER',

              'industry_id' => 'INTEGER',

              'mission' => 'TEXT',

              'vision' => 'TEXT',

              'value' => 'TEXT',

              'representative_photo' => 'FILE',

              'representative_profile' => 'TEXT',

              'ipo' => 'ENUM',

              'representative_name' => 'STRING',

              'slug' => 'STRING',

              'image' => 'FILE',

              'capital' => 'STRING',

              'ipo' => 'BOOLEAN'

            },

            'full_name' => 'STRING',

            'profile' => 'STRING',

            'photo' => 'FILE',

            'is_high_rank_employee' => 'BOOLEAN'

          },

          'error_object' => {}

        }

        let(:resource) { build(:company_employee) }

        let(:params) { { company_employees: resource.attributes.to_hash } }

        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
  path '/api/company_employees/id' do
    get 'Show company_employees' do
      tags 'company_employees'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'show' do
        examples 'application/json' => {

          'company_employee' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'company_id' => 'INTEGER',

            'company' => {

              'id' => 'INTEGER',

              'created_at' => 'DATETIME',

              'updated_at' => 'DATETIME',

              'name' => 'STRING',

              'logo' => 'FILE',

              'location' => 'STRING',

              'launched_year' => 'STRING',

              'business_details' => 'TEXT',

              'number_of_employees' => 'INTEGER',

              'industry_id' => 'INTEGER',

              'mission' => 'TEXT',

              'vision' => 'TEXT',

              'value' => 'TEXT',

              'representative_photo' => 'FILE',

              'representative_profile' => 'TEXT',

              'ipo' => 'ENUM',

              'representative_name' => 'STRING',

              'slug' => 'STRING',

              'image' => 'FILE',

              'capital' => 'STRING',

              'ipo' => 'BOOLEAN'

            },

            'full_name' => 'STRING',

            'profile' => 'STRING',

            'photo' => 'FILE',

            'is_high_rank_employee' => 'BOOLEAN'

          }

        }

        let(:resource) { create(:company_employee) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/company_employees' do
    post 'Create company_employees' do
      tags 'company_employees'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          company_employees: {
            type: :object,
            properties: {

              company_id: {
                type: :integer
              },

              full_name: {
                type: :string
              },

              profile: {
                type: :string
              },

              photo: {
                type: :file
              },

              is_high_rank_employee: {
                type: :boolean
              }

            }
          },

          companies: {
            type: :object,
            properties: {

              name: {
                type: :string
              },

              logo: {
                type: :file
              },

              location: {
                type: :string
              },

              launched_year: {
                type: :string
              },

              business_details: {
                type: :text
              },

              number_of_employees: {
                type: :integer
              },

              industry_id: {
                type: :integer
              },

              mission: {
                type: :text
              },

              vision: {
                type: :text
              },

              value: {
                type: :text
              },

              representative_photo: {
                type: :file
              },

              representative_profile: {
                type: :text
              },

              ipo: {
                type: :string
              },

              representative_name: {
                type: :string
              },

              slug: {
                type: :string
              },

              image: {
                type: :file
              },

              capital: {
                type: :string
              }

            }
          }

        }
      }
      response '200', 'create' do
        examples 'application/json' => {

          'company_employee' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'company_id' => 'INTEGER',

            'company' => {

              'id' => 'INTEGER',

              'created_at' => 'DATETIME',

              'updated_at' => 'DATETIME',

              'name' => 'STRING',

              'logo' => 'FILE',

              'location' => 'STRING',

              'launched_year' => 'STRING',

              'business_details' => 'TEXT',

              'number_of_employees' => 'INTEGER',

              'industry_id' => 'INTEGER',

              'mission' => 'TEXT',

              'vision' => 'TEXT',

              'value' => 'TEXT',

              'representative_photo' => 'FILE',

              'representative_profile' => 'TEXT',

              'ipo' => 'ENUM',

              'representative_name' => 'STRING',

              'slug' => 'STRING',

              'image' => 'FILE',

              'capital' => 'STRING',

              'ipo' => 'BOOLEAN'

            },

            'full_name' => 'STRING',

            'profile' => 'STRING',

            'photo' => 'FILE',

            'is_high_rank_employee' => 'BOOLEAN'

          },

          'error_object' => {}

        }

        let(:resource) { build(:company_employee) }

        let(:params) { { company_employees: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/company_employees' do
    get 'List company_employees' do
      tags 'company_employees'
      consumes 'application/json'

      security [bearerAuth: []]

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          company_employees: {
            type: :object,
            properties: {

              company_id: {
                type: :integer
              },

              full_name: {
                type: :string
              },

              profile: {
                type: :string
              },

              is_high_rank_employee: {
                type: :boolean
              }

            }
          },

          pagination_page: {
            type: :page_number
          },

          pagination_limit: {
            type: :page_size
          },

          companies: {
            type: :object,
            properties: {

              name: {
                type: :string
              },

              location: {
                type: :string
              },

              launched_year: {
                type: :string
              },

              business_details: {
                type: :text
              },

              number_of_employees: {
                type: :integer
              },

              industry_id: {
                type: :integer
              },

              mission: {
                type: :text
              },

              vision: {
                type: :text
              },

              value: {
                type: :text
              },

              representative_profile: {
                type: :text
              },

              ipo: {
                type: :string
              },

              representative_name: {
                type: :string
              },

              slug: {
                type: :string
              },

              capital: {
                type: :string
              }

            }
          }

        }
      }
      response '200', 'filter' do
        examples 'application/json' => {

          'total_pages' => 'INTEGER',

          'company_employees' => 'ARRAY'

        }

        let(:resource_owner) { create(:company_user) }

        let(:resource) { create(:company_employee) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
