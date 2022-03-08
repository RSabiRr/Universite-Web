using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Universite_Web.Models
{
    public class CustomUser:IdentityUser
    {
        [MaxLength(250)]
        public string Surname { get; set; }
        [MaxLength(250)]
        public string Name { get; set; }
      
    }
}
