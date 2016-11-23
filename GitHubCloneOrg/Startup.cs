using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GitHubCloneOrg.Startup))]
namespace GitHubCloneOrg
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {

        }
    }
}
