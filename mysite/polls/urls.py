from django.urls import include, path
from .views import index

app_name = 'polls'
urlpatterns = [
    path("<str:query>/", index, name="index"),
]
