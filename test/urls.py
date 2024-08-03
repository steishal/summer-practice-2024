from django.urls import path
from . import views
urlpatterns = [
    path('', views.main_page, name='main_page'),
    path('test/my_tests/', views.my_tests, name='my_tests'),
    path('test/passed_tests', views.passed_tests, name='passed_tests'),
    # path('test/<int:id>/passing_the_test/', views.passing_the_test, name='passing_the_test'),
    path('test/FAQ', views.FAQ, name='FAQ'),
    path('test/create_test/', views.create_test, name='create_test'),
    path('test/<int:id>/edit_test/', views.edit_test, name='edit_test'),
    path('account/login/', views.login_view, name='login'),
    path('account/register/', views.register, name='register'),
    path('account/logout/', views.logout_view, name='logout'),
    # path('test/grade_question/<int:id>/<int:id>', views.grade_question, name='grade_question'),
    # path('test/display_question', views.display_question, name='display_question'),
    path('test/<int:test_id>/', views.display_test, name='display_test'),
    path('test/<int:test_id>/question/<int:question_id>/', views.display_question, name='display_question'),
    path('test/<int:test_id>/question/<int:question_id>/grade/', views.grade_question, name='grade_question'),
    path('test/<int:test_id>/results/', views.test_results, name='test_results'),
    path('test/<int:id>/passing_the_test/', views.passing_the_test, name='passing_the_test'),
    path('search-tests/', views.TestSearchView.as_view(), name='search_tests'),
    path('category/<int:id>/', views.categories_views, name='category'),
    path('delete_question/<int:question_id>/', views.delete_question, name='delete_question'),
]