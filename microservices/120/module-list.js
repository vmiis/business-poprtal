(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "m1":        {url:"$H/m/glasgow-sleep-effort-scale-form.html"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
