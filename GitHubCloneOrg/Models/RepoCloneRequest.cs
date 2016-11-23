using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GitHubCloneOrg.Models
{
  public class RepoCloneRequest
  {
    public string cloneToPath = string.Empty;
    public string orgName = string.Empty;
    public IList<Repo> repos = null;
  }
}