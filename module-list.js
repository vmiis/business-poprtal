(function(){
    //-------------------------------------------------------------------------------------
    var set_prefix=function(prefix, modules){
        for(m in modules){ 
            if($vm.module_list[prefix+m]!=undefined) alert(m+" is existed"); 
            else{
                $vm.module_list[prefix+m]=modules[m];
                $vm.module_list[prefix+m].prefix=prefix;
            }
        }
    }
    //-------------------------------------------------------------------------------------
    var prefix='equipment-booking-';
    var $H="https://portal.vmiis.com/modules/equipment-booking"; if(window.location.toString().indexOf('_l=1')!=-1) $H="http://localhost:8000/vmiis/business-portal/modules/equipment-booking";
    var modules={
        panel:         {url:$H+"/panel.html",router:1},
        diagram:       {url:$H+"/diagram/diagram.html",title:"Equipment booking diagram"},
        booking_data:  {url:$H+"/equipment-list-and-equipment-booking-records/booking-data.html",  Table:"demo-vm-19091811",  form_module:"booking_form"},
        booking_form:  {url:$H+"/equipment-list-and-equipment-booking-records/booking-form.html",  Table:"demo-vm-19091811",  lookup:"demo-vm-19091812"},
        booking_form_2:{url:$H+"/equipment-list-and-equipment-booking-records/booking-form-2.html",Table:"demo-vm-19091811",  lookup:"demo-vm-19091812"},
        list_data:     {url:$H+"/equipment-list-and-equipment-booking-records/list-data.html",     Table:"demo-vm-19091812",  form_module:"list_form"},
        list_form:     {url:$H+"/equipment-list-and-equipment-booking-records/list-form.html",     Table:"demo-vm-19091812"},
        month:         {url:$H+"/equipment-booking-calendar/calendar-month.html",            Table:"demo-vm-19091811","booking":"booking_form",lookup:"demo-vm-19091812"},
        week:          {url:$H+"/equipment-booking-calendar/calendar-week.html",             Table:"demo-vm-19091811","booking":"booking_form","booking2":"booking_form_2",lookup:"demo-vm-19091812"},
        day:           {url:$H+"/equipment-booking-calendar/calendar-day.html",              Table:"demo-vm-19091811","booking":"booking_form",lookup:"demo-vm-19091812"},
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
    prefix='room-booking-';
    $H="https://portal.vmiis.com/modules/room-booking"; if(window.location.toString().indexOf('_l=1')!=-1) $H="http://localhost:8000/vmiis/business-portal/modules/room-booking";
    modules={
        panel:         {url:$H+"/panel.html",router:1},
        diagram:       {url:$H+"/diagram/diagram.html"},
        booking_data:  {url:$H+"/room-list-and-room-booking-records/booking-data.html",  Table:"demo-vm-19091805",  form_module:"booking_form"},
        booking_form:  {url:$H+"/room-list-and-room-booking-records/booking-form.html",  Table:"demo-vm-19091805",  lookup:"demo-vm-19091806"},
        booking_form_2:{url:$H+"/room-list-and-room-booking-records/booking-form-2.html",Table:"demo-vm-19091805",  lookup:"demo-vm-19091806"},
        list_data:     {url:$H+"/room-list-and-room-booking-records/list-data.html",     Table:"demo-vm-19091806",  form_module:"list_form"},
        list_form:     {url:$H+"/room-list-and-room-booking-records/list-form.html",     Table:"demo-vm-19091806"},
        month:         {url:$H+"/room-booking-calendar/calendar-month.html",            Table:"demo-vm-19091805","booking":"booking_form",lookup:"demo-vm-19091806"},
        week:          {url:$H+"/room-booking-calendar/calendar-week.html",             Table:"demo-vm-19091805","booking":"booking_form","booking2":"booking_form_2",lookup:"demo-vm-19091806"},
        day:           {url:$H+"/room-booking-calendar/calendar-day.html",              Table:"demo-vm-19091805","booking":"booking_form",lookup:"demo-vm-19091806"},
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
    var prefix='car-booking-';
    var $H="https://portal.vmiis.com/modules/car-booking"; if(window.location.toString().indexOf('_l=1')!=-1) $H="http://localhost:8000/vmiis/business-portal/modules/car-booking";
    var modules={
        panel:          {url:$H+"/panel.html",router:1},
        diagram:        {url:$H+"/diagram/diagram.html"},
        booking_data:   {url:$H+"/car-list-and-car-booking-records/booking-data.html",  Table:"demo-vm-19091807",  form_module:"booking_form"},
        booking_form:   {url:$H+"/car-list-and-car-booking-records/booking-form.html",  Table:"demo-vm-19091807",  lookup:"demo-vm-19091808"},
        booking_form_2: {url:$H+"/car-list-and-car-booking-records/booking-form-2.html",Table:"demo-vm-19091807",  lookup:"demo-vm-19091808"},
        list_data:      {url:$H+"/car-list-and-car-booking-records/list-data.html",     Table:"demo-vm-19091808",  form_module:"list_form"},
        list_form:      {url:$H+"/car-list-and-car-booking-records/list-form.html",     Table:"demo-vm-19091808"},
        month:          {url:$H+"/car-booking-calendar/calendar-month.html",            Table:"demo-vm-19091807","booking":"booking_form",lookup:"demo-vm-19091808",router:1},
        week:           {url:$H+"/car-booking-calendar/calendar-week.html",             Table:"demo-vm-19091807","booking":"booking_form","booking2":"booking_form_2",lookup:"demo-vm-19091808"},
        day:            {url:$H+"/car-booking-calendar/calendar-day.html",              Table:"demo-vm-19091807","booking":"booking_form",lookup:"demo-vm-19091808"},
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
    prefix='bookkeeping-';
    $H="https://portal.vmiis.com/modules/bookkeeping"; if(window.location.toString().indexOf('_l=1')!=-1) $H="http://localhost:8000/vmiis/business-portal/modules/bookkeeping";
    var pre_item="vm-demo-predefined-transaction-item";
    var transaction="vm-demo-transaction-records";
    var aggregation="vm-demo-ato-bas-quarter";
    var aggregation_ie="vm-demo-income-expense-month-aggregation";
    var aggregation_item="vm-demo-item-monthly-aggregation";
    var aggregation_tax="vm-demo-tax-return-yearly-aggregation";
    if(window.location.toString().indexOf('tables=wapp')!=-1){
        pre_item="predefined-transaction-item-wappsystem";
        transaction="transaction-wappsystem";
        aggregation="ato-bas-quarter-aggregation-wappsystem";
        aggregation_ie="income-expense-month-aggregation-wappsystem";
        aggregation_item="item-month-aggregation-wappsystem";
        aggregation_tax="ato-tax-return-yearly-aggregation-wappsystem";
    }
    else if(window.location.toString().indexOf('tables=vm')!=-1){
        pre_item="predefined-transaction-item-vmautomation";
        transaction="transaction-vmautomation";
        aggregation="ato-bas-quarter-aggregation-vmautomation";
        aggregation_ie="income-expense-month-aggregation-vmautomation";
        aggregation_item="item-month-aggregation-vmautomation";
        aggregation_tax="ato-tax-return-yearly-aggregation-vmautomation";
    }
    var modules={
        "panel":                                    {url:$H+"/panel.html",router:1},
        "diagram":                                  {url:$H+"/diagram.html",router:1},
        "predefined_transaction_item_data":         {url:$H+"/predefined-transaction-item/data.html",Table:pre_item,form_module:"predefined_transaction_item_form",router:1},
        "predefined_transaction_item_form":         {url:$H+"/predefined-transaction-item/form.html",Table:pre_item},
        "transaction-data-basic":                   {url:$H+"/transaction-records/data-basic.html",                   Table:transaction,form_module:"transaction-form",router:1},
        "transaction-data-date":                    {url:$H+"/transaction-records/data-date.html",                    Table:transaction,form_module:"transaction-form",router:1},
        "transaction-data-year-quarter":            {url:$H+"/transaction-records/data-year-quarter.html",            Table:transaction,form_module:"transaction-form",router:1},
        "transaction-data-bas":                     {url:$H+"/transaction-records/data-bas.html",                     Table:transaction,form_module:"transaction-form",router:1},
        "transaction-data-year-quarter-bas":        {url:$H+"/transaction-records/data-year-quarter-bas.html",        Table:transaction,form_module:"transaction-form",router:1},
        "transaction-data-tax-return":              {url:$H+"/transaction-records/data-tax-return.html",              Table:transaction,form_module:"transaction-form",router:1},
        "transaction-data-year-quarter-tax-return": {url:$H+"/transaction-records/data-year-quarter-tax-return.html", Table:transaction,form_module:"transaction-form",router:1},
        "transaction-form":                         {url:$H+"/transaction-records/form.html",                         Table:transaction,item_table:pre_item,router:1},
        "ato-bas-quarter-aggregation-data":         {url:$H+"/aggregations/ato-bas-quarter-aggregation-data.html",  Table:aggregation,transaction_table:transaction,form_module:'ato-bas-quarter-aggregation-form',router:1},
        "ato-bas-quarter-aggregation-form":         {url:$H+"/aggregations/ato-bas-quarter-aggregation-form.html",  Table:aggregation,router:1},
        "income-expense-month-aggregation-data":    {url:$H+"/aggregations/income-expense-month-aggregation-data.html", Table:aggregation_ie,transaction_table:transaction,form_module:'income-expense-month-aggregation-form',router:1},
        "income-expense-month-aggregation-form":    {url:$H+"/aggregations/income-expense-month-aggregation-form.html", Table:aggregation_ie,router:1},
        "income-expense-month-aggregation-chart":   {url:$H+"/aggregations/income-expense-month-aggregation-chart.html",Table:aggregation_ie,router:1},
        "item-monthly-aggregation-data":            {url:$H+"/aggregations/item-month-aggregation-data.html",   Table:aggregation_item,transaction_table:transaction,form_module:'item-monthly-aggregation-form',router:1},
        "item-monthly-aggregation-form":            {url:$H+"/aggregations/item-month-aggregation-form.html",   Table:aggregation_item,router:1},
        "item-monthly-aggregation-chart":           {url:$H+"/aggregations/item-month-aggregation-chart.html",  Table:"vm-demo-item-monthly-aggregation",router:1},
        "tax-return-yearly-aggregation-data":       {url:$H+"/aggregations/ato-tax-return-yearly-aggregation-data.html",    Table:aggregation_tax,transaction_table:transaction,form_module:'tax-return-yearly-aggregation-form',router:1},
        "tax-return-yearly-aggregation-form":       {url:$H+"/aggregations/ato-tax-return-yearly-aggregation-form.html",    Table:aggregation_tax,router:1},
        "tax-return-yearly-aggregation-chart":      {url:$H+"/aggregations/ato-tax-return-yearly-aggregation-chart.html",   Table:aggregation_tax,router:1},
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
    var prefix='marketing-';
    var $H="https://portal.vmiis.com/modules/marketing"; if(window.location.toString().indexOf('_l=1')!=-1) $H="http://localhost:8000/vmiis/business-portal/modules/marketing";
    var modules={
        "panel":                                    {url:$H+"/panel.html",router:1},
        "contact_us_1":                             {url:$H+"/contact-us-1/form.html",Table:"demo-vm-ccontact-us",router:1},
        "contact_us_2":                             {url:$H+"/contact-us-2/form.html",Table:"demo-vm-ccontact-us",router:1},
        "contact_us_3":                             {url:$H+"/contact-us-3/form.html",Table:"demo-vm-ccontact-us",router:1},
        "contact_us_data":                          {url:$H+"/contact-us-1/data.html",Table:"demo-vm-ccontact-us",router:1},
        "services_1":                               {url:$H+"/our-services/services.html",router:1},
        "learn_more":                               {url:$H+"/our-services/learn-more.html",router:1},
        "portfolio_1":                              {url:$H+"/our-portfolio/portfolio.html",router:1},
        "trainers_1":                               {url:$H+"/our-trainers/trainers.html",router:1},
        "medical-services":                         {url:$H+"/medical-services/services.html",router:1},
        "read_more":                                {url:$H+"/medical-services/read-more.html",router:1},
    }
    //-------------------------------------------------------------------------------------
    set_prefix(prefix,modules);
    var prefix='spardac-'
    var $H="https://portal.vmiis.com/modules/spardac"; if(window.location.toString().indexOf('_l=1')!=-1) $H="http://localhost:8000/vmiis/business-portal/modules/spardac";
    var modules={
        "panel":                                {url:$H+"/panel.html",router:1},
        "participant-data":   		            {url:"xxx",Table:"spardac-participant",participant_id:{field1:"Subject_ID",field2:"Subject_Initials"}, not_install:1},
        "notes-data":  	                        {url:$H+"/m/library/notes-data.html",Table:"spardac-notes",form_module:"notes-form",router:1},
        "notes-form":  	                        {url:$H+"/m/library/notes-form.html",Table:"spardac-notes",router:1},
        "me-shf-data-spardac":                  {url:$H+"/m/library/me-shf-data.html",Table:"me-shf-spardac",form_module:"me-shf-form-spardac",router:1},
        "me-shf-form-spardac":                  {url:$H+"/m/library/me-shf-form.html",Table:"me-shf-spardac",task_name:"Activity - Morningness-Eveningness Questionnaire",router:1},
        "actiwatch-data-spardac":               {url:$H+"/m/library/actiwatch-data.html",Table:"actiwatch-spardac",form_module:"actiwatch-form-spardac",router:1},
        "actiwatch-form-spardac":               {url:$H+"/m/library/actiwatch-form.html",Table:"actiwatch-spardac",router:1},
        "adverse-event-data-spardac":           {url:$H+"/m/library/adverse-event-data.html",Table:"adverse-event-spardac",form_module:"adverse-event-form-spardac",task_name:"Unscheduled - Adverse Event",router:1},
        "adverse-event-form-spardac":           {url:$H+"/m/library/adverse-event-form.html",Table:"adverse-event-spardac",task_name:"Unscheduled - Adverse Event",router:1},
        "anthropometry-age-sex-data-spardac":   {url:$H+"/m/library/anthropometry-age-sex-data.html",Table:"anthropometry-age-sex-spardac",form_module:"anthropometry-age-sex-form-spardac",router:1},
        "anthropometry-age-sex-form-spardac":   {url:$H+"/m/library/anthropometry-age-sex-form.html",Table:"anthropometry-age-sex-spardac",router:1},
        "bpns-form-spardac":                    {url:$H+"/m/library/bpns-form.html",Table:"bpns-spardac",task_name:"Basic Psychological Need Satisfaction Scale"},
        "gses-data-spardac":                    {url:$H+"/m/library/gses-data.html",Table:"gses-spardac",form_module:"gses-form-spardac"},
        "brief-illness-perception-questionnaire-data-spardac":   {url:$H+"/m/library/brief-illness-perception-questionnaire-data.html",Table:"brief-illness-perception-questionnaire-spardac",form_module:"brief-illness-perception-questionnaire-form-spardac",router:1},
        "brief-illness-perception-questionnaire-form-spardac":   {url:$H+"/m/library/brief-illness-perception-questionnaire-form.html",Table:"brief-illness-perception-questionnaire-spardac",task_name:"Brief Illness Perception Questionnaire",router:1},
        "breif-sexual-function-inventory-data-spardac":          {url:$H+"/m/library/breif-sexual-function-inventory-data.html",Table:"breif-sexual-function-inventory-spardac",form_module:"breif-sexual-function-inventory-form-spardac",router:1},
        "breif-sexual-function-inventory-form-spardac":          {url:$H+"/m/library/breif-sexual-function-inventory-form.html",Table:"breif-sexual-function-inventory-spardac",task_name:"Brief Sexual Function Inventory",router:1},
        "concom-medication-data-spardac":       {url:$H+"/m/library/concom-medication-data.html",Table:"concom-medication-spardac",form_module:"concom-medication-form-spardac",task_name:"Unscheduled - Concomitant Medication"},
        "concom-medication-form-spardac":       {url:$H+"/m/library/concom-medication-form.html",Table:"concom-medication-spardac",task_name:"Unscheduled - Concomitant Medication"},
        "dass-data-spardac":                    {url:$H+"/m/library/dass-data.html",Table:"dass-spardac",form_module:"dass-form-spardac"},
        "dass-form-spardac":                    {url:$H+"/m/library/dass-form.html",Table:"dass-spardac",task_name:"Depression Anxiety Stress Scale (DASS-21)"},
        "dsst-data-spardac":                    {url:$H+"/m/neurocog/dsst-data.html",Table:"dsst-spardac",form_module:"dsst-form-spardac"},
        "dsst-form-spardac":                    {url:$H+"/m/neurocog/dsst-form.html",Table:"dsst-spardac"},
        "dbas-16-data-spardac":                 {url:$H+"/m/library/dbas-16-data.html",Table:"dbas-16-spardac",form_module:"dbas-16-form-spardac"},
        "dbas-16-form-spardac":                 {url:$H+"/m/library/dbas-16-form.html",Table:"dbas-16-spardac",task_name:"Dysfunctional Beliefs and Attitudes about Sleep (DBAS-16)"},
        
        "ess-data-spardac":                     {url:$H+"/m/library/ess-data.html",Table:"ess-spardac",form_module:"ess-form-spardac"},
        "ess-form-spardac":                     {url:$H+"/m/library/ess-form.html",Table:"ess-spardac",task_name:"Epworth Sleepiness Scale"},
        "ethnicity-data-spardac":               {url:$H+"/m/library/ethnicity-data.html",Table:"ethnicity-spardac",form_module:"ethnicity-form-spardac"},
        "ethnicity-form-spardac":               {url:$H+"/m/library/ethnicity-form.html",Table:"ethnicity-spardac",task_name:"Ethnicity"},
        "eq-5d-data-spardac":                   {url:$H+"/m/library/eq-5d-data.html",Table:"eq-5d-spardac",form_module:"eq-5d-form-spardac"},
        "eq-5d-form-spardac":                   {url:$H+"/m/library/eq-5d-form.html",Table:"eq-5d-spardac",task_name:"EQ-5D-5L instrument"},

        "fss-data-spardac":                     {url:$H+"/m/library/fss-data.html",Table:"fss-spardac",form_module:"fss-form-spardac"},
        "fss-form-spardac":                     {url:$H+"/m/library/fss-form.html",Table:"fss-spardac",task_name:"Fatigue Severity Scale"},
        "fatigue-symptom-inventory-data-spardac":   {url:$H+"/m/library/fatigue-symptom-inventory-data.html",Table:"fatigue-symptom-inventory-spardac",form_module:"fatigue-symptom-inventory-form-spardac"},
        "fatigue-symptom-inventory-form-spardac":   {url:$H+"/m/library/fatigue-symptom-inventory-form.html",Table:"fatigue-symptom-inventory-spardac",task_name:"Fatigue Symptom Inventory"},
        "female-sexual-function-index-data-spardac":   {url:$H+"/m/library/female-sexual-function-index-data.html",Table:"female-sexual-function-index-spardac",form_module:"female-sexual-function-index-form-spardac"},
        "female-sexual-function-index-form-spardac":   {url:$H+"/m/library/female-sexual-function-index-form.html",Table:"female-sexual-function-index-spardac",task_name:"Female Sexual Function Index (FSFI)"},
        "finger-tapping12-before-data-spardac": {url:$H+"/m/neurocog/finger-tapping12-before-data.html",Table:"finger-tapping12-spardac",form_module:"finger-tapping12-before-form-spardac"},
        "finger-tapping12-before-form-spardac": {url:$H+"/m/neurocog/finger-tapping12-before-form.html",Table:"finger-tapping12-spardac",task_name:"Finger Tapping - Evening"},
        "finger-tapping6-after-data-spardac":   {url:$H+"/m/neurocog/finger-tapping6-after-data.html",Table:"finger-tapping-spardac",form_module:"finger-tapping6-after-form-spardac"},
        "finger-tapping6-after-form-spardac":   {url:$H+"/m/neurocog/finger-tapping6-after-form.html",Table:"finger-tapping-spardac",Table2:"finger-tapping12-spardac",task_name:"Finger Tapping - Morning"},
        
        //"finger-tapping12-alt-data-spardac":    {url:$H+"/m/neurocog/finger-tapping12-data.html",Table:"finger-tapping12-alt-spardac",form_module:"finger-tapping12-alt-form-spardac"},
        //"finger-tapping12-alt-form-spardac":    {url:$H+"/m/neurocog/finger-tapping12-alt-form.html",Table:"finger-tapping12-alt-spardac"},
        
        //"finger-tapping-alt-data-spardac":      {url:$H+"/m/neurocog/finger-tapping-data.html",Table:"finger-tapping-alt-spardac",form_module:"finger-tapping-alt-form-spardac"},
        //"finger-tapping-alt-form-spardac":      {url:$H+"/m/neurocog/finger-tapping-alt-form.html",Table:"finger-tapping-alt-spardac"},
        
        "ffs-data-spardac":                     {url:$H+"/m/library/ffs-data.html",Table:"ffs-spardac",form_module:"ffs-form-spardac"},
        "ffs-form-spardac":                     {url:$H+"/m/library/ffs-form.html",Table:"ffs-spardac",task_name:"Flinders Fatigue Scale"},
        "fosq-data-spardac":                    {url:$H+"/m/library/fosq-data.html",Table:"fosq-spardac",form_module:"fosq-form-spardac"},
        "fosq-form-spardac":                    {url:$H+"/m/library/fosq-form.html",Table:"fosq-spardac",task_name:"Funtional Outcomes of Sleep Questionnaire (FOSQ 10)"},
        "fosq30-data-spardac":                  {url:$H+"/m/library/fosq30-data.html",Table:"fosq30-spardac",form_module:"fosq30-form-spardac"},
        "fosq30-form-spardac":                  {url:$H+"/m/library/fosq30-form.html",Table:"fosq30-spardac",task_name:"Funtional Outcomes of Sleep Questionnaire (FOSQ 30)"},
        
        "gad7-data-spardac":                    {url:$H+"/m/library/gad7-data.html",Table:"gad7-spardac",form_module:"gad7-form-spardac"},
        "gad7-form-spardac":                    {url:$H+"/m/library/gad7-form.html",Table:"gad7-spardac",task_name:"Generalised Anxiety Disorder (GAD-7)"},
        "gses-data-spardac":                    {url:$H+"/m/library/gses-data.html",Table:"gses-spardac",form_module:"gses-form-spardac"},
        "gses-form-spardac":                    {url:$H+"/m/library/gses-form.html",Table:"gses-spardac",task_name:"General Self-Efficacy Scale"},
        "gds-data-spardac":                     {url:$H+"/m/library/gds-data.html",Table:"gds-spardac",form_module:"gds-form-spardac"},
        "gds-form-spardac":                     {url:$H+"/m/library/gds-form.html",Table:"gds-spardac",task_name:"Geriatric Depression Scale"},
        "glasgow-content-of-thoughts-inventory-data-spardac":   {url:$H+"/m/library/glasgow-content-of-thoughts-inventory-data.html",Table:"glasgow-content-of-thoughts-inventory-spardac",form_module:"glasgow-content-of-thoughts-inventory-form-spardac"},
        "glasgow-content-of-thoughts-inventory-form-spardac":   {url:$H+"/m/library/glasgow-content-of-thoughts-inventory-form.html",Table:"glasgow-content-of-thoughts-inventory-spardac",task_name:"Glasgow Content of Thoughts Inventory"},
        "glasgow-sleep-effort-scale-data-spardac":   {url:$H+"/m/library/glasgow-sleep-effort-scale-data.html",Table:"glasgow-sleep-effort-scale-spardac",form_module:"glasgow-sleep-effort-scale-form-spardac"},
        "glasgow-sleep-effort-scale-form-spardac":   {url:$H+"/m/library/glasgow-sleep-effort-scale-form.html",Table:"glasgow-sleep-effort-scale-spardac",task_name:"Glasgow Sleep Effort Scale"},
        "psggrr-data-spardac":                    {url:$H+"/m/library/psggrr-data.html",Table:"psggrr-spardac",form_module:"psggrr-form-spardac",task_name:"Grael Research PSG Report"},
        "psggrr-form-spardac":                    {url:$H+"/m/library/psggrr-form.html",Table:"psggrr-spardac",task_name:"Grael Research PSG Report"},

        "hpq-data-spardac":                     {url:$H+"/m/library/hpq-data.html",Table:"hpq-spardac",form_module:"hpq-form-spardac"},
        "hpq-form-spardac":                     {url:$H+"/m/library/hpq-form.html",Table:"hpq-spardac",task_name:"Health and Work Performance Questionnaire (HPQ)"},
        "me-data-spardac":                      {url:$H+"/m/library/me-data.html",Table:"me-spardac",form_module:"me-form-spardac"},
        "me-form-spardac":                      {url:$H+"/m/library/me-form.html",Table:"me-spardac",task_name:"Horne & Östberg Morningness-Eveningness Composite Questionnaire"},
        "hads-data-spardac":                    {url:$H+"/m/library/hads-data.html",Table:"hads-spardac",form_module:"hads-form-spardac"},
        "hads-form-spardac":                    {url:$H+"/m/library/hads-form.html",Table:"hads-spardac",task_name:"Hospital Anxiety and Depression Scale (HADS)"},

        "iwqlq-data-spardac":                   {url:$H+"/m/library/iwqlq-data.html",Table:"iwqlq-spardac",form_module:"iwqlq-form-spardac"},
        "iwqlq-form-spardac":                   {url:$H+"/m/library/iwqlq-form.html",Table:"iwqlq-spardac",task_name:"Impact of Weight on Quality of Life Questionnaire (IWQLQ)"},
        "ispq-data-spardac":                    {url:$H+"/m/library/ispq-data.html",Table:"ispq-spardac",form_module:"ispq-form-spardac"},
        "ispq-form-spardac":                    {url:$H+"/m/library/ispq-form.html",Table:"ispq-spardac",task_name:"Impact to Sleep and Preferences Questionnaire"},
        "isi-data-spardac":                     {url:$H+"/m/library/isi-data.html",Table:"isi-spardac",form_module:"isi-form-spardac"},
        "isi-form-spardac":                     {url:$H+"/m/library/isi-form.html",Table:"isi-spardac",task_name:"Insomnia Severity Index"},


        "kss-data-spardac":                     {url:$H+"/m/library/kss-data.html",Table:"kss-spardac",form_module:"kss-form-spardac",router:1},
        "kss-form-spardac":                     {url:$H+"/m/library/kss-form.html",Table:"kss-spardac",task_name:"Karolinska Sleepiness Scale (KSS)",router:1},

        "letter-cancellation-data-spardac":     {url:$H+"/m/neurocog/letter-cancellation-data.html",Table:"letter-cancellation-spardac",form_module:"letter-cancellation-form-spardac"},
        "letter-cancellation-form-spardac":     {url:$H+"/m/neurocog/letter-cancellation-form.html",Table:"letter-cancellation-spardac"},
        "lifestyle-data-spardac":               {url:$H+"/m/library/lifestyle-data.html",Table:"lifestyle-spardac",form_module:"lifestyle-form-spardac"},
        "lifestyle-form-spardac":               {url:$H+"/m/library/lifestyle-form.html",Table:"lifestyle-spardac",task_name:"Lifestyle"},

        "medical-history-data-spardac":         {url:$H+"/m/library/medical-history-data.html",Table:"medical-history-spardac",form_module:"medical-history-form-spardac"},
        "medical-history-form-spardac":         {url:$H+"/m/library/medical-history-form.html",Table:"medical-history-spardac",task_name:"Medical History"},
        "medical-history-short-data-spardac":   {url:$H+"/m/library/medical-history-short-data.html",Table:"medical-history-short-spardac",form_module:"medical-history-short-form-spardac"},
        "medical-history-short-form-spardac":   {url:$H+"/m/library/medical-history-short-form.html",Table:"medical-history-short-spardac",task_name:"Medical History Short"},
        "medications-data-spardac":             {url:$H+"/m/library/medications-data.html",Table:"medications-spardac",form_module:"medications-form-spardac"},
        "medications-form-spardac":             {url:$H+"/m/library/medications-form.html",Table:"medications-spardac",task_name:"Medications"},
        "multidimensional-fatigue-symptom-inventory-data-spardac":   {url:$H+"/m/library/multidimensional-fatigue-symptom-inventory-data.html",Table:"multidimensional-fatigue-symptom-inventory-spardac",form_module:"multidimensional-fatigue-symptom-inventory-form-spardac"},
        "multidimensional-fatigue-symptom-inventory-form-spardac":   {url:$H+"/m/library/multidimensional-fatigue-symptom-inventory-form.html",Table:"multidimensional-fatigue-symptom-inventory-spardac",task_name:"Multidimensional Fatigue Symptom Inventory"},
        "map-data-spardac":                     {url:$H+"/m/library/map-data.html",Table:"map-spardac",form_module:"map-form-spardac"},
        "map-form-spardac":                     {url:$H+"/m/library/map-form.html",Table:"map-spardac",task_name:"Multivariate Apnea Prediction Questionnaire"},
        "nback1-data-spardac":                  {url:$H+"/m/neurocog/nback1-data.html",Table:"nback1-spardac",form_module:"nback1-form-spardac"},
        "nback1-form-spardac":                  {url:$H+"/m/neurocog/nback1-form.html",Table:"nback1-spardac",task_name:"1-Back"},
        "nback2-data-spardac":                  {url:$H+"/m/neurocog/nback2-data.html",Table:"nback2-spardac",form_module:"nback2-form-spardac"},
        "nback2-form-spardac":                  {url:$H+"/m/neurocog/nback2-form.html",Table:"nback2-spardac",task_name:"2-back"},
        "nback3-data-spardac":                  {url:$H+"/m/neurocog/nback3-data.html",Table:"nback3-spardac",form_module:"nback3-form-spardac"},
        "nback3-form-spardac":                  {url:$H+"/m/neurocog/nback3-form.html",Table:"nback3-spardac",task_name:"3-Back"},
        "nback-upload-data-spardac":            {url:$H+"/m/neurocog/nback-upload-data.html",Table:"nback-upload-spardac",form_module:"nback-upload-form-spardac"},
        "nback-upload-form-spardac":            {url:$H+"/m/neurocog/nback-upload-form.html",Table:"nback-upload-spardac",task_name:"N-Back Calculation Check"},
        
        "phq-data-spardac":                     {url:$H+"/m/library/phq-data.html",Table:"phq-spardac",form_module:"phq-form-spardac"},
        "phq-form-spardac":                     {url:$H+"/m/library/phq-form.html",Table:"phq-spardac",task_name:"Patient Health Questionnaire (PHQ-9)"},
        "psqi-data-spardac":                    {url:$H+"/m/library/psqi-data.html",Table:"psqi-spardac",form_module:"psqi-form-spardac"},
        "psqi-form-spardac":                    {url:$H+"/m/library/psqi-form.html",Table:"psqi-spardac",task_name:"Pittsburgh Sleep Quality Index (PSQI)"},
        "pre-sleep-arousal-scale-data-spardac":   {url:$H+"/m/library/pre-sleep-arousal-scale-data.html",Table:"pre-sleep-arousal-scale-spardac",form_module:"pre-sleep-arousal-scale-form-spardac"},
        "pre-sleep-arousal-scale-form-spardac":   {url:$H+"/m/library/pre-sleep-arousal-scale-form.html",Table:"pre-sleep-arousal-scale-spardac",task_name:"Pre-Sleep Arousal Scale"},
        "poms-data-spardac":                    {url:$H+"/m/library/poms-data.html",Table:"poms-spardac",form_module:"poms-form-spardac"},
        "poms-form-spardac":                    {url:$H+"/m/library/poms-form.html",Table:"poms-spardac",task_name:"Profile of Mood States Questionnaire (POMS)"},
        "psg300-data-spardac":                    {url:$H+"/m/library/psg300-data.html",Table:"psg300-spardac",form_module:"psg300-form-spardac",task_name:"PSG 300 Report"},
        "psg300-form-spardac":                    {url:$H+"/m/library/psg300-form.html",Table:"psg300-spardac",task_name:"PSG 300 Report"},
        "pvt-data-spardac":                     {url:$H+"/m/library/pvt-data.html",Table:"pvt-spardac",form_module:"pvt-form-spardac"},
        "pvt-form-spardac":                     {url:$H+"/m/library/pvt-form.html",Table:"pvt-spardac"},
        "pvt-pc-data-spardac":                     {url:$H+"/m/library/pvt-pc-data.html",Table:"pvt-pc-spardac",form_module:"pvt-pc-form-spardac"},
        "pvt-pc-form-spardac":                     {url:$H+"/m/library/pvt-pc-form.html",Table:"pvt-pc-spardac"},
        
        "rec-drug-data-spardac":                {url:$H+"/m/library/rec-drug-data.html",Table:"rec-drug-spardac",form_module:"rec-drug-form-spardac"},
        "rec-drug-form-spardac":                {url:$H+"/m/library/rec-drug-form.html",Table:"rec-drug-spardac",task_name:"Recreational Drugs"},
        "restless-leg-data-spardac":            {url:$H+"/m/library/restless-leg-data.html",Table:"restless-leg-spardac",form_module:"restless-leg-form-spardac"},
        "restless-leg-form-spardac":            {url:$H+"/m/library/restless-leg-form.html",Table:"restless-leg-spardac",task_name:"Restless Legs"},
        
        "serious-adverse-event-data-spardac":   {url:$H+"/m/library/serious-adverse-event-data.html",Table:"serious-adverse-event-spardac",form_module:"serious-adverse-event-form-spardac",task_name:"Serious Adverse EventOne"},
        "serious-adverse-event-form-spardac":   {url:$H+"/m/library/serious-adverse-event-form.html",Table:"serious-adverse-event-spardac"},
        "serious-adverse-event-follow-up-data-spardac":   {url:$H+"/m/library/serious-adverse-event-follow-up-data.html",Table:"serious-adverse-event-follow-up-spardac",form_module:"serious-adverse-event-follow-up-form-spardac",task_name:"Serious Adverse Event Follow-up"},
        "serious-adverse-event-follow-up-form-spardac":   {url:$H+"/m/library/serious-adverse-event-follow-up-form.html",Table:"serious-adverse-event-follow-up-spardac"},
        "sds-data-spardac":                     {url:$H+"/m/library/sds-data.html",Table:"sds-spardac",form_module:"sds-form-spardac"},
        "sds-form-spardac":                     {url:$H+"/m/library/sds-form.html",Table:"sds-spardac",task_name:"Sheehan Disability Scale"},
        "sf36-data-spardac":                    {url:$H+"/m/library/sf36-data.html",Table:"sf36-spardac",form_module:"sf36-form-spardac"},
        "sf36-form-spardac":                    {url:$H+"/m/library/sf36-form.html",Table:"sf36-spardac",task_name:"Short Form Survey Instrument (SF36)"},
        "sdp-data-spardac":                     {url:$H+"/m/library/sdp-data.html",Table:"sdp-spardac",form_module:"sdp-form-spardac"},
        "sdp-form-spardac":                     {url:$H+"/m/library/sdp-form.html",Table:"sdp-spardac",task_name:"Sleep Disorder Patterns"},
        "sleep-history-data-spardac":           {url:$H+"/m/library/sleep-history-data.html",Table:"sleep-history-spardac",form_module:"sleep-history-form-spardac"},
        "sleep-history-form-spardac":           {url:$H+"/m/library/sleep-history-form.html",Table:"sleep-history-spardac",task_name:"Sleep History"},
        "shi-data-spardac":                     {url:$H+"/m/library/shi-data.html",Table:"shi-spardac",form_module:"shi-form-spardac"},
        "shi-form-spardac":                     {url:$H+"/m/library/shi-form.html",Table:"shi-spardac",task_name:"Sleep Hygiene Index (SHI)"},
        "stanford-sleepiness-scale-data-spardac":   {url:$H+"/m/library/stanford-sleepiness-scale-data.html",Table:"stanford-sleepiness-scale-spardac",form_module:"stanford-sleepiness-scale-form-spardac"},
        "stanford-sleepiness-scale-form-spardac":   {url:$H+"/m/library/stanford-sleepiness-scale-form.html",Table:"stanford-sleepiness-scale-spardac",task_name:"Stanford Sleepiness Scale"},
        "stop-bang-data-spardac":               {url:$H+"/m/library/stop-bang-data.html",Table:"stop-bang-spardac",form_module:"stop-bang-form-spardac"},
        "stop-bang-form-spardac":               {url:$H+"/m/library/stop-bang-form.html",Table:"stop-bang-spardac",task_name:"Stop-Bang"},
        "stroop-colour-data-spardac":           {url:$H+"/m/neurocog/stroop-colour-data.html",Table:"stroop-colour-spardac",form_module:"stroop-colour-form-spardac"},
        "stroop-colour-form-spardac":           {url:$H+"/m/neurocog/stroop-colour-form.html",Table:"stroop-colour-spardac"},
        "stroop-text-data-spardac":             {url:$H+"/m/neurocog/stroop-text-data.html",Table:"stroop-text-spardac",form_module:"stroop-text-form-spardac"},
        "stroop-text-form-spardac":             {url:$H+"/m/neurocog/stroop-text-form.html",Table:"stroop-text-spardac"},

        "three-factor-eating-questionnaire-data-spardac":   {url:$H+"/m/library/three-factor-eating-questionnaire-data.html",Table:"three-factor-eating-questionnaire-spardac",form_module:"three-factor-eating-questionnaire-form-spardac"},
        "three-factor-eating-questionnaire-form-spardac":   {url:$H+"/m/library/three-factor-eating-questionnaire-form.html",Table:"three-factor-eating-questionnaire-spardac",task_name:"Three-Factor Eating Questionnaire (TFEQ-R18)"},
        "tipi-data-spardac":                    {url:$H+"/m/library/tipi-data.html",Table:"tipi-spardac",form_module:"tipi-form-spardac"},
        "tipi-form-spardac":                    {url:$H+"/m/library/tipi-form.html",Table:"tipi-spardac",task_name:"Ten-Item Personality Inventory (TIPI)"},
        "tower-london-data-spardac":            {url:$H+"/m/neurocog/tower-london-data.html",Table:"tower-london-spardac",form_module:"tower-london-form-spardac"},
        "tower-london-form-spardac":            {url:$H+"/m/neurocog/tower-london-form.html",Table:"tower-london-spardac"},
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
    var prefix='research-projects-'
    var $H="https://portal.vmiis.com/modules/research-projects"; if(window.location.toString().indexOf('_l=1')!=-1) $H="http://localhost:8000/vmiis/business-portal/modules/research-projects";
    var modules={
        "panel":                     {url:$H+"/panel.html",router:1},
        "sleep-research":            {url:$H+"/sleep-research/sleep-research.html",router:1,has_child:1, first:'p1'},
        "p1":                        {url:$H+"/sleep-research/page1.html",router:1,parent:'sleep-research'},
        "p2":                        {url:$H+"/sleep-research/page2.html",router:1,parent:'sleep-research'},
        "p3":                        {url:$H+"/sleep-research/page3.html",router:1,parent:'sleep-research'},
        "p4":                        {url:$H+"/sleep-research/page4.html",router:1,parent:'sleep-research'},
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
    var prefix='modules-'
    var $H="https://portal.vmiis.com/modules"; if(window.location.toString().indexOf('_l=1')!=-1) $H="http://localhost:8000/vmiis/business-portal/modules";
    var modules={
        "data-sharing-and-management":              {url:$H+"/unclassified/data-sharing-and-management.html",router:1, not_install:1},
        "musicxml":                                 {url:$H+"/music/musicxml-player/musicxml.html",router:1, not_install:1},
        "arpeggios":                                {url:$H+"/music/arpeggios.html",router:1, not_install:1},
        "chords":                                   {url:$H+"/music/chords.html",router:1, not_install:1},
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
    var prefix='invoice-'
    var $H="https://portal.vmiis.com/modules/invoice"; if(window.location.toString().indexOf('_l=1')!=-1) $H="http://localhost:8000/vmiis/business-portal/modules/invoice";
    var invoice_client_table="vm-demo-invoice-client";
    var invoice_record_table="vm-demo-invoice";
    var invoice_print_module="invoice-print-demo";
    if(window.location.toString().indexOf('tables=wapp')!=-1){
        invoice_client_table="client-wappsystem";
        invoice_record_table="invoice-wappsystem";
        invoice_print_module="invoice-print-wapp";
    }
    else if(window.location.toString().indexOf('tables=vm')!=-1){
        invoice_client_table="client-vm";
        invoice_record_table="invoice-vm";
        invoice_print_module="invoice-print-vm";
    }
    var modules={
        "panel":                          {url:$H+"/panel.html",router:1},
        "diagram":                        {url:$H+"/diagram/diagram.html"},
        "client-data":                    {url:$H+"/client/data.html",      Table:invoice_client_table, form_module:'client-form',  router:1},
        "client-form":                    {url:$H+"/client/form.html",      Table:invoice_client_table, router:1},
        "invoice-data":                   {url:$H+"/invoice/data.html",     Table:invoice_record_table, form_module:'invoice-form', print_module:invoice_print_module,router:1},
        "invoice-form":                   {url:$H+"/invoice/form.html",     Table:invoice_record_table,   client_table:invoice_client_table,  router:1},
        "invoice-print-demo":             {url:$H+"/print/demo.html",       Table:invoice_record_table,   client_table:invoice_client_table,  router:1},
        "invoice-print-wapp":             {url:$H+"/print/wapp.html",       Table:invoice_record_table,   client_table:invoice_client_table,  router:1},
        "invoice-print-vm":               {url:$H+"/print/vm.html",         Table:invoice_record_table,   client_table:invoice_client_table,  router:1},
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
    var prefix='ud-'
    var $H="https://portal.vmiis.com/modules/under-development"; if(window.location.toString().indexOf('_l=1')!=-1) $H="http://localhost:8000/vmiis/business-portal/modules/under-development";
    var modules={
        "panel":                          {url:$H+"/panel.html",router:1},
        "test1":                          {url:$H+"/1/test1.html",router:1},
        "flat":                          {url:$H+"/1/flat.html",router:1},
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
    var prefix='event-calendar-';
    var $H="https://portal.vmiis.com/modules/event-task-reminder-calendar"; if(window.location.toString().indexOf('_l=1')!=-1) $H="http://localhost:8000/vmiis/business-portal/modules/event-task-reminder-calendar";
    var modules={
        "panel":         {url:$H+"/panel.html",router:1},
        "diagram":       {url:$H+"/diagram/diagram.html"},
        "record_data":   {url:$H+"/category-and-records/record-data.html",   Table:"demo-vm-19100103",  form_module:"record_form"},
        "record_form":   {url:$H+"/category-and-records/record-form.html",   Table:"demo-vm-19100103",  lookup:"demo-vm-19100104"},
        "list_data":     {url:$H+"/category-and-records/list-data.html",     Table:"demo-vm-19100104",  form_module:"list_form"},
        "list_form":     {url:$H+"/category-and-records/list-form.html",     Table:"demo-vm-19100104"},
        "month":         {url:$H+"/calendar/calendar-month.html",            Table:"demo-vm-19100103","record":"record_form",lookup:"demo-vm-19100104"},
        "week":          {url:$H+"/calendar/calendar-week.html",             Table:"demo-vm-19100103","record":"record_form","record2":"record_form_2",lookup:"demo-vm-19100104"},
        "day":           {url:$H+"/calendar/calendar-day.html",              Table:"demo-vm-19100103","record":"record_form",lookup:"demo-vm-19100104"},
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
    var prefix='purchase-order-';
    var $H="https://portal.vmiis.com/modules/purchase-order-request-approval-process"; if(window.location.toString().indexOf('_l=1')!=-1) 
    $H="http://localhost:8000/vmiis/business-portal/modules/purchase-order-request-approval-process";
    var modules={
        "panel":         {url:$H+"/panel.html",router:1},
        "diagram":       {url:$H+"/diagram/diagram.html"},
        "my-request-data": {url:$H+"/request/my-request-data.html",
            Table: "purchase-order-request-demo190712",
            Table2:"purchase-order-approval-demo190712",
            Table3:"purchase-order-process-demo190712",
            form_module:"my-request-form",router:1,title:"My requests"},

        "my-request-form": {url:$H+"/request/my-request-form.html",
            Table:"purchase-order-request-demo190712",
            manager_list_table:"email-list-demo-001",
            processor_list_table:"email-list-demo-002",
            email_to_manager:"email-to-manager"},
        "my-approval-data":  	{url:$H+"/request/my-approval-data.html",
            Table: "purchase-order-request-demo190712",
            Table2:"purchase-order-approval-demo190712",
            Table3:"purchase-order-process-demo190712",
            form_module:"my-approval-form",router:1,title:"My approvals"},
        "my-approval-form":  	{url:$H+"/request/my-approval-form.html",
            Table:"purchase-order-approval-demo190712",
            manager_list_table:"email-list-demo-001",
            processor_list_table:"email-list-demo-002",
            email_to_processor:"email-to-processor"},

        "my-process-data":  	{url:$H+"/request/my-process-data.html",
            Table: "purchase-order-request-demo190712",
            Table2:"purchase-order-approval-demo190712",
            Table3:"purchase-order-process-demo190712",
            form_module:"my-process-form",router:1,title:"My processes"},
        "my-process-form":  	{url:$H+"/request/my-process-form.html",
            Table:"purchase-order-process-demo190712",
            manager_list_table:"email-list-demo-001",
            processor_list_table:"email-list-demo-002",
            email_to_requester:"email-to-requester"},

        "all-request-data":  	{url:$H+"/request/all-request-data.html",
            Table: "purchase-order-request-demo190712",
            Table2:"purchase-order-approval-demo190712",
            Table3:"purchase-order-process-demo190712",
            form_module:"all-request-form",router:1,title:"All requests"},
        "all-request-form":  	{url:$H+"/request/all-request-form.html",
            Table:"purchase-order-request-demo190712",
            manager_list_table:"email-list-demo-001",
            processor_list_table:"email-list-demo-002"},


        "email-to-manager":     {url:$H+"/email-template/to-manager.html"},
        "email-to-processor":   {url:$H+"/email-template/to-processor.html"},
        "email-to-requester":   {url:$H+"/email-template/to-requester.html"},
        
        //"manager-list-data":  	{url:$H+"/email-list/data.html",Table:"email-list-demo-001",form_module:"manager-list-form",router:1,title:'Manager List'},
        //"manager-list-form":  	{url:$H+"/email-list/form.html",Table:"email-list-demo-001",title:'Manager List'},
        
        "processor-list-data":  {url:$H+"/email-list/data.html",Table:"email-list-demo-002",form_module:"processor-list-form",router:1,title:'Processor List'},
        "processor-list-form":  {url:$H+"/email-list/form.html",Table:"email-list-demo-002",title:'Processor List'},
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
    var prefix='purchase-order-';
    var $H="https://portal.vmiis.com/modules/under-development/purchase-order"; //if(window.location.toString().indexOf('_l=1')!=-1) 
    $H="http://localhost:8000/vmiis/business-portal/modules/under-development/purchase-order";
    var modules={
        "request-data":             {url:$H+"/request/data.html",   Table:"purchase-order-request-demo",  form_module:"request-form", router:1},
        "request-form":             {url:$H+"/request/form.html",   Table:"purchase-order-request-demo",  lookup:"purchase-order-manager-demo"},
        "manager-list-data":        {url:$H+"/list/data.html",      Table:"purchase-order-manager-demo",  form_module:"manager-list-form",router:1,title:'Manager List'},
        "manager-list-form":        {url:$H+"/list/form.html",      Table:"purchase-order-manager-demo",  title:'Manager List'},
        "accountant-list-data":     {url:$H+"/list/data.html",      Table:"accountant-order-processor-demo",  form_module:"accountant-list-form",router:1,title:'Accountant List'},
        "accountant-list-form":     {url:$H+"/list/form.html",      Table:"accountant-order-processor-demo",  title:'Accountant List'},
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
    var prefix='Business-data-collection-';
    var $H="https://portal.vmiis.com/modules/business-data-collection"; 
    //if(window.location.toString().indexOf('_l=1')!=-1) 
    $H="http://localhost:8000/vmiis/business-portal/modules/business-data-collection";
    var modules={
        "panel":{url:$H+"/panel.html",router:1},
        
        
        "communal-ordering-diagram":{url:$H+"/communal-ordering/diagram/diagram.html",router:1},
        "communal-ordering-data":{
            url:$H+"/communal-ordering/request/data.html",
            Table:"communal-ordering",
            form_module:"communal-ordering-form", 
            approval:prefix+'communal-ordering-approval-form',
            approval_table:"communal-ordering-approval",
            process:prefix+'communal-ordering-process-form',
            process_table:"communal-ordering-process",
            follow_up:prefix+'communal-ordering-follow-up-data',
            follow_up_table:"communal-ordering-follow-up",
            description:"Communal ordering data"
        },
        "communal-ordering-form":{
            url:$H+"/communal-ordering/request/form.html",
            Table:"communal-ordering",
            description:"Communal ordering form",
        },
        "communal-ordering-data-self":{
            url:$H+"/communal-ordering/request/data.html",
            Table:"communal-ordering",
            form_module:"communal-ordering-form-self", 
            approval:prefix+'communal-ordering-approval-form',
            approval_table:"communal-ordering-approval",
            process:prefix+'communal-ordering-process-form',
            process_table:"communal-ordering-process",
            follow_up:prefix+'communal-ordering-follow-up-data',
            follow_up_table:"communal-ordering-follow-up",
            self:1,
            description:"Communal ordering data"
        },
        "communal-ordering-form-self":{
            url:$H+"/communal-ordering/request/form.html",
            Table:"communal-ordering",
            description:"Communal ordering form",
            self:1,
        },
        "communal-ordering-approval-form":{
            url:$H+"/communal-ordering/approval/form.html",
            Table:"communal-ordering-approval",
            parent_table:"communal-ordering",
            description:"Communal ordering approval",
        },
        "communal-ordering-process-form":{
            url:$H+"/communal-ordering/process/form.html",
            Table:"communal-ordering-process",
            parent_table:"communal-ordering",
            description:"Communal ordering process",
        },
        "communal-ordering-follow-up-data":{
            url:$H+"/communal-ordering/follow-up/data.html",
            Table:"communal-ordering-follow-up",
            form_module:"communal-ordering-follow-up-form", 
            parent_table:"communal-ordering",
            description:"Communal ordering data"
        },
        "communal-ordering-follow-up-form":{
            url:$H+"/follow-up/form.html",
            Table:"communal-ordering-follow-up",
            parent_table:"communal-ordering",
            description:"Communal ordering form",
        },
        
        
        
        "vaccination-data":{
            url:$H+"/vaccination-records/data.html",
            Table:"vaccination",
            form_module:"vaccination-form", 
            title:"All vaccination records",
            description:"data"
        },
        "vaccination-form":{
            url:$H+"/vaccination-records/form.html",
            Table:"vaccination",
        },
        "vaccination-data-self":{
            url:$H+"/vaccination-records/data.html",
            Table:"vaccination",
            form_module:"vaccination-form-self", 
            title:"My vaccination records",
            description:"data",
            self:1
        },
        "vaccination-form-self":{
            url:$H+"/vaccination-records/form.html",
            Table:"vaccination",
            title:"Vaccination form",
            description:"form",
            self:1,
            router:1,
        },
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------



})();
