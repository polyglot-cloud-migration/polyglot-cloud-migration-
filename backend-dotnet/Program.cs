using Microsoft.AspNetCore.Builder;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options => {
    options.AddDefaultPolicy(p => p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});

var app = builder.Build();

app.UseCors();

app.MapGet("/", () => "Backend is Working!");

app.MapGet("/api/status", () => new { 
    status = "Connected", 
    time = System.DateTime.Now 
});

app.Run("http://0.0.0.0:5000");