using System;
using System.Linq;
using System.Web.Http;
using GitHubCloneOrg.Models;

namespace GitHubCloneOrg.Controllers
{
  public class RepoController : ApiController
  {
    // POST api/repo/clone
    [HttpPost]
    [ActionName("clone")]
    public String CloneRepos([FromBody]RepoCloneRequest repoCloneRequest)
    {

      String workingDir = repoCloneRequest.cloneToPath + "\\" + repoCloneRequest.orgName;
      foreach (Repo repo in repoCloneRequest.repos)
      {
        System.Diagnostics.Process process = new System.Diagnostics.Process();
        System.Diagnostics.ProcessStartInfo startInfo = new System.Diagnostics.ProcessStartInfo();
        startInfo.WindowStyle = System.Diagnostics.ProcessWindowStyle.Hidden;
        startInfo.WorkingDirectory = workingDir;
        startInfo.FileName = "cmd.exe";
        startInfo.Arguments = "/c git clone " + repo.sshURL;
        process.StartInfo = startInfo;
        process.Start();
        //Get program output
        //string strOutput = process.StandardOutput.ReadToEnd();

        //Wait for process to finish
        process.WaitForExit();
      }

      return "+OK";

    }
  }
}
