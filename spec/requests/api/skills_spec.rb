require 'swagger_helper'

RSpec.describe 'Skill', type: :request do
  # jitera-hook-for-rswag-example
  path '/api/skills/id' do
    delete 'Destroy skills' do
      tags 'skills'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'delete' do
        examples 'application/json' => {}

        let(:resource) { create(:skill) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/skills/id' do
    put 'Update  skills' do
      tags 'skills'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          skills: {
            type: :object,
            properties: {

              name: {
                type: :string
              },

              applicant_id: {
                type: :integer
              },

              skill_type: {
                type: :enum
              }

            }
          }

        }
      }
      response '200', 'update' do
        examples 'application/json' => {

          'skill' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'name' => 'STRING',

            'applicant_id' => 'INTEGER'

          },

          'error_object' => {}

        }

        let(:resource) { build(:skill) }

        let(:params) { { skills: resource.attributes.to_hash } }

        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/skills' do
    post 'Create skills' do
      tags 'skills'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          skills: {
            type: :object,
            properties: {

              name: {
                type: :string
              },

              applicant_id: {
                type: :integer
              },

              skill_type: {
                type: :enum
              }

            }
          }

        }
      }
      response '200', 'create' do
        examples 'application/json' => {

          'skill' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'name' => 'STRING',

            'applicant_id' => 'INTEGER'

          },

          'error_object' => {}

        }

        let(:resource) { build(:skill) }

        let(:params) { { skills: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/skills' do
    get 'List skills' do
      tags 'skills'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          skills: {
            type: :object,
            properties: {

              name: {
                type: :string
              },

              applicant_id: {
                type: :integer
              },

              skill_type: {
                type: :enum
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

          'skills' => 'ARRAY'

        }

        let(:resource) { create(:skill) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
