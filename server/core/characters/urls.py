from django.urls import path
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
from characters.schema import schema

urlpatterns = [
    # Only a single URL to access GraphQL
    path('graphql', csrf_exempt(GraphQLView.as_view(graphiql=True, schema=schema)))

]