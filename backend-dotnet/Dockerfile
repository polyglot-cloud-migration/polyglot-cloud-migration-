FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Sab se pehle project file copy karen
COPY *.csproj ./
RUN dotnet restore

# Phir baaqi saara code copy karen
COPY . ./
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/out .
ENTRYPOINT ["dotnet", "Backend.dll"]