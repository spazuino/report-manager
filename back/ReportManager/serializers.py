from django.db import models
from django.db.models import fields
from django.db.models.base import Model
from rest_framework import serializers
from ReportManager.models import Macchinari, Report , Sellers, EndUsers, Tecnico, Componenti

class MacchinarioSerializer(serializers.ModelSerializer):
    class Meta:
        model=Macchinari
        fields=('MacchinarioId','MacchinarioName','MacchinarioSn')

class ReportSerializers(serializers.ModelSerializer):
    class Meta:
        model=Report
        fields=('ReportId','Seller','EndUSer','Macchinario','MacchinarioSn', 'DataIntervento', 'Tecnico', 'DataVendita', 'ParteCat', 'StatoRep')


class SellerSerializers(serializers.ModelSerializer):
    class Meta:
        model=Sellers
        fields=('SellerId','SellerName')
        
class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model=EndUsers
        fields=('UserId','UserName')

class TecnicoSerializers(serializers.ModelSerializer):
    class Meta:
        model=Tecnico
        fields=('TecnicoId', 'TecnicoName')

class CompoSerializers(serializers.ModelSerializer):
    class Meta:
        Model=Componenti
        fields=('compId', 'CompName', 'Note')