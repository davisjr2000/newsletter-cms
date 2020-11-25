require 'test_helper'

class StoriesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get story_new_url
    assert_response :success
  end

  test "should get create" do
    get story_create_url
    assert_response :success
  end

  test "should get index" do
    get story_index_url
    assert_response :success
  end

  test "should get show" do
    get story_show_url
    assert_response :success
  end

  test "should get destroy" do
    get story_destroy_url
    assert_response :success
  end

  test "should get edit" do
    get story_edit_url
    assert_response :success
  end

  test "should get update" do
    get story_update_url
    assert_response :success
  end

end
