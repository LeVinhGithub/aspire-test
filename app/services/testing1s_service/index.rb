# rubocop:disable Style/ClassAndModuleChildren
class Testing1sService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params

    @records = Testing1

    @query = records
  end

  def execute
    testing1s_cstring_start_with_like

    testing1s_stext_start_with_like

    testing1s_cint_equal

    testing1s_cfloat_equal

    testing1s_cdate_equal

    testing1s_cdatetime_equal

    testing1s_cenump_equal

    testing1s_c_equal

    testing1s_testung2s_count_equal

    order
    paginate

    records
  end

  def testing1s_cstring_start_with_like
    return if params.dig(:testing1s, :cstring).blank?

    where_clause = query.where('testing1s.cstring like ?', "%#{params.dig(:testing1s, :cstring)}")

    @records = where_clause
  end

  def testing1s_stext_start_with_like
    return if params.dig(:testing1s, :stext).blank?

    where_clause = query.where('testing1s.stext like ?', "%#{params.dig(:testing1s, :stext)}")

    # Notes - The reason for doing this is as below
    # If suppose there is OR condition, and previous 1 filter is nil, params, not present?
    # in such case there will be records.or(second_condition)
    # OR will return all records and break logic
    # ideally if previous condition nil it should retrun with current second condition and not perform OR
    @records = if records.is_a?(Class)
                 where_clause
               else
                 records.or(query)
               end
  end

  def testing1s_cint_equal
    return if params.dig(:testing1s, :cint).blank?

    where_clause = query.where(testing1s: { cint: params.dig(:testing1s, :cint).to_s })

    # Notes - The reason for doing this is as below
    # If suppose there is OR condition, and previous 1 filter is nil, params, not present?
    # in such case there will be records.or(second_condition)
    # OR will return all records and break logic
    # ideally if previous condition nil it should retrun with current second condition and not perform OR
    @records = if records.is_a?(Class)
                 where_clause
               else
                 records.or(query)
               end
  end

  def testing1s_cfloat_equal
    return if params.dig(:testing1s, :cfloat).blank?

    where_clause = query.where(testing1s: { cfloat: params.dig(:testing1s, :cfloat).to_s })

    # Notes - The reason for doing this is as below
    # If suppose there is OR condition, and previous 1 filter is nil, params, not present?
    # in such case there will be records.or(second_condition)
    # OR will return all records and break logic
    # ideally if previous condition nil it should retrun with current second condition and not perform OR
    @records = if records.is_a?(Class)
                 where_clause
               else
                 records.or(query)
               end
  end

  def testing1s_cdate_equal
    return if params.dig(:testing1s, :cdate).blank?

    where_clause = query.where(testing1s: { cdate: params.dig(:testing1s, :cdate).to_s })

    # Notes - The reason for doing this is as below
    # If suppose there is OR condition, and previous 1 filter is nil, params, not present?
    # in such case there will be records.or(second_condition)
    # OR will return all records and break logic
    # ideally if previous condition nil it should retrun with current second condition and not perform OR
    @records = if records.is_a?(Class)
                 where_clause
               else
                 records.or(query)
               end
  end

  def testing1s_cdatetime_equal
    return if params.dig(:testing1s, :cdatetime).blank?

    where_clause = query.where(testing1s: { cdatetime: params.dig(:testing1s, :cdatetime).to_s })

    # Notes - The reason for doing this is as below
    # If suppose there is OR condition, and previous 1 filter is nil, params, not present?
    # in such case there will be records.or(second_condition)
    # OR will return all records and break logic
    # ideally if previous condition nil it should retrun with current second condition and not perform OR
    @records = if records.is_a?(Class)
                 where_clause
               else
                 records.or(query)
               end
  end

  def testing1s_cenump_equal
    return if params.dig(:testing1s, :cenump).blank?

    where_clause = query.where(testing1s: { cenump: params.dig(:testing1s, :cenump).to_s })

    # Notes - The reason for doing this is as below
    # If suppose there is OR condition, and previous 1 filter is nil, params, not present?
    # in such case there will be records.or(second_condition)
    # OR will return all records and break logic
    # ideally if previous condition nil it should retrun with current second condition and not perform OR
    @records = if records.is_a?(Class)
                 where_clause
               else
                 records.or(query)
               end
  end

  def testing1s_c_equal
    return if params.dig(:testing1s, :c).blank?

    where_clause = query.where(testing1s: { c: params.dig(:testing1s, :c).to_s })

    # Notes - The reason for doing this is as below
    # If suppose there is OR condition, and previous 1 filter is nil, params, not present?
    # in such case there will be records.or(second_condition)
    # OR will return all records and break logic
    # ideally if previous condition nil it should retrun with current second condition and not perform OR
    @records = if records.is_a?(Class)
                 where_clause
               else
                 records.or(query)
               end
  end

  def testing1s_testung2s_count_equal
    return if params.dig(:testing1s, :testung2s_count).blank?

    where_clause = query.where(testing1s: { testung2s_count: params.dig(:testing1s, :testung2s_count).to_s })

    # Notes - The reason for doing this is as below
    # If suppose there is OR condition, and previous 1 filter is nil, params, not present?
    # in such case there will be records.or(second_condition)
    # OR will return all records and break logic
    # ideally if previous condition nil it should retrun with current second condition and not perform OR
    @records = if records.is_a?(Class)
                 where_clause
               else
                 records.or(query)
               end
  end

  def order
    @records = records.order('testing1s.created_at desc')
  end

  def paginate
    @records = records.page(params[:pagination_page] || 1).per(params[:pagination_limit] || 20)
  end
end
# rubocop:enable Style/ClassAndModuleChildren
