import graphene
from graphene_django import DjangoObjectType
from .models import Character
from graphene import Argument

class CharacterType(DjangoObjectType):
    class Meta:
        model = Character
        fields = (
            "num",
            "name",
            "description",
            "image"
        )

class Query(graphene.ObjectType):
    all_characters = graphene.List(CharacterType)
    one_character = graphene.Field(CharacterType, num=graphene.Int())

    def resolve_all_characters(root, info):
        return Character.objects.all()

    def resolve_one_note(self, info, num):
        return Character.objects.get(pk=num)


class CreateCharacter(graphene.Mutation):
    class Arguments:
        num = graphene.Int()
        name = graphene.String()
        description = graphene.String()
        image = graphene.String()

    character = graphene.Field(CharacterType)

    def mutate(self, info, name, description, image, num):
        character = Character.objects.create(num=num, name=name, description=description, image=image)
        character.save()
        return CreateCharacter(character=character)

class Mutation(graphene.ObjectType):
    create_character = CreateCharacter.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)