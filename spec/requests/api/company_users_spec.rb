require 'swagger_helper'

RSpec.describe 'CompanyUser', type: :request do
  # jitera-hook-for-rswag-example
  path '/api/company_users/id' do
    delete 'Destroy company_users' do
      tags 'company_users'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'delete' do
        examples 'application/json' => {}

        let(:resource) { create(:company_user) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/company_users/id' do
    put 'Update  company_users' do
      tags 'company_users'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          company_users: {
            type: :object,
            properties: {

              company_id: {
                type: :integer
              },

              full_name: {
                type: :string
              },

              position: {
                type: :string
              },

              photo: {
                type: :file
              },

              email: {
                type: :string
              },

              role: {
                type: :enum
              },

              phone_number: {
                type: :string
              }

            }
          }

        }
      }
      response '200', 'update' do
        examples 'application/json' => {

          'company_user' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'company_id' => 'INTEGER',

            'full_name' => 'STRING',

            'position' => 'STRING',

            'photo' => 'FILE',

            'email' => 'STRING',

            'role' => 'ENUM',

            'phone_number' => 'STRING'

          },

          'error_object' => {}

        }

        let(:resource) { build(:company_user) }

        let(:params) { { company_users: resource.attributes.to_hash } }

        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
  path '/api/company_users/id' do
    get 'Show company_users' do
      tags 'company_users'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'show' do
        examples 'application/json' => {

          'company_user' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'company_id' => 'INTEGER',

            'full_name' => 'STRING',

            'position' => 'STRING',

            'photo' => 'FILE',

            'email' => 'STRING',

            'role' => 'ENUM',

            'phone_number' => 'STRING'

          }

        }

        let(:resource) { create(:company_user) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/company_users' do
    post 'Create company_users' do
      tags 'company_users'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          company_users: {
            type: :object,
            properties: {

              company_id: {
                type: :integer
              },

              full_name: {
                type: :string
              },

              position: {
                type: :string
              },

              photo: {
                type: :file
              },

              email: {
                type: :string
              },

              role: {
                type: :enum
              },

              phone_number: {
                type: :string
              }

            }
          }

        }
      }
      response '200', 'create' do
        examples 'application/json' => {

          'company_user' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'company_id' => 'INTEGER',

            'full_name' => 'STRING',

            'position' => 'STRING',

            'photo' => 'FILE',

            'email' => 'STRING',

            'role' => 'ENUM',

            'phone_number' => 'STRING'

          },

          'error_object' => {}

        }

        let(:resource) { build(:company_user) }

        let(:params) { { company_users: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/company_users' do
    get 'List company_users' do
      tags 'company_users'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          company_users: {
            type: :object,
            properties: {

              company_id: {
                type: :integer
              },

              full_name: {
                type: :string
              },

              position: {
                type: :string
              },

              email: {
                type: :string
              },

              role: {
                type: :enum
              },

              phone_number: {
                type: :string
              }

            }
          },

          pagination_page: {
            type: :page_number
          },

          pagination_limit: {
            type: :page_size
          }

        }
      }
      response '200', 'filter' do
        examples 'application/json' => {

          'total_pages' => 'INTEGER',

          'company_users' => 'ARRAY'

        }

        let(:resource) { create(:company_user) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
