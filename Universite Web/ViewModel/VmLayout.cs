using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Universite_Web.Models;

namespace Universite_Web.ViewModel
{
    public class VmLayout
    {
        public List<Slider> Sliders { get; set; }
        public VmStudentLogin VmStudentLogin { get; set; }
    }
}
