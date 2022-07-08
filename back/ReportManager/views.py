from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from ReportManager.models import Macchinari, Report, Sellers, EndUsers, Tecnico, Componenti
from ReportManager.serializers import MacchinarioSerializer, ReportSerializers, SellerSerializers, UserSerializers, TecnicoSerializers, CompoSerializers

# Create your views here.

@csrf_exempt
def MacchinarioApi(request,id=0):
    if request.method=='GET':
        macchinari = Macchinari.objects.all()
        macchinari_serializer=MacchinarioSerializer(macchinari,many=True)
        return JsonResponse(macchinari_serializer.data, safe=False)
    elif request.method=='POST':
        macchinario_data=JSONParser().parse(request)
        macchinari_serializer=MacchinarioSerializer(data=macchinario_data)
        if macchinari_serializer.is_valid():
            macchinari_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        macchinario_data=JSONParser().parse(request)
        macchinario=Macchinari.objects.get(MacchinarioId=macchinario_data['MacchinarioId'])
        macchinari_serializer=MacchinarioSerializer(macchinario,data=macchinario_data)
        if macchinari_serializer.is_valid():
            macchinari_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        macchinario=Macchinari.objects.get(macchinariId=id)
        macchinario.delete()
        return JsonResponse("Deleted SUcessfully",safe=False)


@csrf_exempt
def ReportApi(request,id=0):
    if request.method=='GET':
        report = Report.objects.all()
        report_serializer=ReportSerializers(report,many=True)
        return JsonResponse(report_serializer.data, safe=False)
    elif request.method=='POST':
        report_data=JSONParser().parse(request)
        report_serializer=ReportSerializers(data=report_data)
        if report_serializer.is_valid():
            report_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        report_data=JSONParser().parse(request)
        report=Report.objects.get(ReportId=report_data['ReportId'])
        report_serializer=ReportSerializers(report,data=report_data)
        if report_serializer.is_valid():
            report_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        report=Report.objects.get(ReportId=id)
        report.delete()
        return JsonResponse("Deleted SUcessfully",safe=False)

@csrf_exempt
def SellersApi(request,id=0):
    if request.method=='GET':
        sellers = Sellers.objects.all()
        seller_serializer=SellerSerializers(sellers,many=True)
        return JsonResponse(seller_serializer.data, safe=False)
    elif request.method=='POST':
        seller_data=JSONParser().parse(request)
        seller_serializer=SellerSerializers(data=seller_data)
        if seller_serializer.is_valid():
            seller_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        seller_data=JSONParser().parse(request)
        seller=Sellers.objects.get(SellerId=seller_data['SellerId'])
        seller_serializer=SellerSerializers(seller,data=seller_data)
        if seller_serializer.is_valid():
            seller_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        seller=Sellers.objects.get(SellerId=id)
        seller.delete()
        return JsonResponse("Deleted Sucessfully",safe=False)

@csrf_exempt
def UserApi(request,id=0):
    if request.method=='GET':
        user = EndUsers.objects.all()
        user_serializers=UserSerializers(user,many=True)
        return JsonResponse(user_serializers.data, safe=False)
    elif request.method=='POST':
        user_data=JSONParser().parse(request)
        user_serializers=UserSerializers(data=user_data)
        if user_serializers.is_valid():
            user_serializers.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        user_data=JSONParser().parse(request)
        user=EndUsers.objects.get(USerId=user_data['USerId'])
        user_serializers=UserSerializers(user,data=user_data)
        if user_serializers.is_valid():
            user_serializers.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        user=EndUsers.objects.get(UserId=id)
        user.delete()
        return JsonResponse("Deleted Sucessfully",safe=False)

@csrf_exempt
def TecnicoApi(request,id=0):
    if request.method=='GET':
        tecnico = Tecnico.objects.all()
        tecnico_serializers=TecnicoSerializers(tecnico,many=True)
        return JsonResponse(tecnico_serializers.data, safe=False)
    elif request.method=='POST':
        tecnico_data=JSONParser().parse(request)
        tecnico_serializers=TecnicoSerializers(data=tecnico_data)
        if tecnico_serializers.is_valid():
            tecnico_serializers.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        tecnico_data=JSONParser().parse(request)
        tecnico=Tecnico.objects.get(TecnicoId=tecnico_data['TecnicoId'])
        tecnico_serializers=TecnicoSerializers(tecnico,data=tecnico_data)
        if tecnico_serializers.is_valid():
            tecnico_serializers.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        tecnico=Tecnico.objects.get(TecnicoId=id)
        tecnico.delete()
        return JsonResponse("Deleted Sucessfully",safe=False)

@csrf_exempt
def CompoApi(request,id=0):
    if request.method=='GET':
        compo = Componenti.objects.all()
        compo_serializers=CompoSerializers(compo,many=True)
        return JsonResponse(compo_serializers.data, safe=False)
    elif request.method=='POST':
        compo_data=JSONParser().parse(request)
        compo_serializers=UserSerializers(data=compo_data)
        if compo_serializers.is_valid():
            compo_serializers.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        compo_data=JSONParser().parse(request)
        compo=Componenti.objects.get(CompoId=compo_data['CompoId'])
        compo_serializers=TecnicoSerializers(compo,data=compo_data)
        if compo_serializers.is_valid():
            compo_serializers.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        compo=Tecnico.objects.get(CompoId=id)
        compo.delete()
        return JsonResponse("Deleted Sucessfully",safe=False)