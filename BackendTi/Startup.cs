using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using BackendTi.Helpers;
using BackendTi.DAO;

namespace BackendTi
{
    public class Startup
    {
        private static readonly string PATH_ANGULAR_APP = "wwwroot/js/AngularApp/";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            // Prevent JSON serialization errors in token
            services.AddControllers();

            services.AddSpaStaticFiles(spa => spa.RootPath = PATH_ANGULAR_APP);
            // .AddNewtonsoftJson(options =>
            //     options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
            // );
            services.Configure<AppSettings>(Configuration.GetSection("AppSettings"));
            services.AddScoped<AdminDAO>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            
            app.UseRouting();
            
            app.UseCors(x => x
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());

            app.UseAuthorization();

            app.UseMiddleware<JwtMiddleware>();
            
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            app.UseSpa(spa => spa.Options.SourcePath = PATH_ANGULAR_APP);
        }
    }
}
