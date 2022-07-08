from django.db import models
from django.db.models.base import Model
from django.db.models.fields import AutoField

# Create your models here.

class Macchinari(models.Model):
    MacchinarioId = models.AutoField(primary_key=True)
    MacchinarioName = models.CharField(max_length=500)
    MacchinarioSn = models.CharField(max_length=10)

class Report(models.Model):
    ReportId = models.AutoField(primary_key=True)
    Seller = models.CharField(max_length=500)
    EndUSer = models.CharField(max_length=500)
    Macchinario = models.CharField(max_length=500)
    MacchinarioSn = models.CharField(max_length=500)
    DataIntervento = models.DateField()
    Tecnico = models.CharField(max_length=500)
    DataVendita = models.DateField()
    ParteCat = models.CharField(max_length=500)
    StatoRep = models.CharField(max_length=11)

class Sellers(models.Model):
    SellerId = models.AutoField(primary_key=True)
    SellerName = models.CharField(max_length=500)

class EndUsers(models.Model):
    UserId = models.AutoField(primary_key=True)
    UserName = models.CharField(max_length=500)

class Tecnico(models.Model):
    TecnicoId = models.AutoField(primary_key=True)
    TecnicoName = models.CharField(max_length=500)

class Componenti(models.Model):
    CompId = models.AutoField(primary_key=True)
    CompName = models.CharField(max_length=500)
    Note = models.CharField(max_length=8000)