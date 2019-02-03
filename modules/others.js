(function(){
    var modules={
        "2-columns-contents": 			{url:"$A/modules/2/2-columns-contents.html",router:1},

        "about":  		  	  			        {url:"$A/modules/a/about.html",router:1},
        "autocomplete-data":  			        {url:"$A/modules/a/autocomplete-data.html",Table:"autocomplete",form_module:"autocomplete-form",router:1},
        "autocomplete-form":  			        {url:"$A/modules/a/autocomplete-form.html",Table:"autocomplete"},
        "a-basic-application-framework-index":  {url:"$A/apps/a/a-basic-application-framework/index.html"},
        "angularjs-hello-world":	            {url:"$A/modules/a/angularjs-hello-world.html",router:1},
        "ato-bas-quarter-aggregation-data":     {url:"$A/modules/a/ato-bas-quarter-aggregation-data.html",Table:"ato-bas-quarter-aggregation",form_module:"ato-bas-quarter-aggregation-form",router:1},
        "ato-bas-quarter-aggregation-form":     {url:"$A/modules/a/ato-bas-quarter-aggregation-form.html",Table:"ato-bas-quarter-aggregation",
                                                    transaction_table:'transaction'
                                                },
        "accountant-list-data":  	            {url:"$A/modules/e/email-list-data.html",Table:"accountant-list",form_module:"accountant-list-form",router:1},
        "accountant-list-form":  	            {url:"$A/modules/e/email-list-form.html",Table:"accountant-list"},
        "bubble":  		  	  			        {url:"$A/modules/b/bubble.html",router:1},
        "bubble-background-app":		        {url:"$A/apps/b/bubble-background/index.html"},
        "bookkeeping-app":  			        {url:"$A/apps/b/bookkeeping/index.html"},
        "bookkeeping-app-wappsystem":  		    {url:"$A/apps/b/bookkeeping-wappsystem/index.html"},
        
        "clinical-trials-data-entry": 	{url:"$A/modules/c/clinical-trials-data-entry.html"},
        "carousel":  		  			{url:"$A/modules/c/carousel.html",router:1},
        "checkbox-data":      			{url:"$A/modules/c/checkbox-data.html",Table:"checkbox",form_module:"checkbox-form",router:1},
        "checkbox-form":      			{url:"$A/modules/c/checkbox-form.html",Table:"checkbox"},
        "consent-data":  	  		    {url:"$A/modules/c/consent-data.html",Table:"consent",form_module:"consent-form"},
        "consent-form":  	  		    {url:"$A/modules/c/consent-form.html",Table:"consent"},
        "color-data":      	  			{url:"$A/modules/c/color-data.html",Table:"color",form_module:"color-form",router:1},
        "color-form":      	  			{url:"$A/modules/c/color-form.html",Table:"color"},
        "coming-soon": 		            {url:"$A/modules/u/under-construction.html",text:"Coming soon...",router:1},
        "contact-us-data":  			{url:"$A/modules/c/contact-us-data.html",Table:"ccontact-us-vm",form_module:"contact-us-form"},
        "contact-us-form":  			{url:"$A/modules/c/contact-us-form.html",Table:"ccontact-us-vm"},
        "contact-us-form-01":  			{url:"$A/modules/c/contact-us-form-01.html",Table:"ccontact-us-vm"},
        "contact-us-form-02":  			{url:"$A/modules/c/contact-us-form-02.html",Table:"ccontact-us-vm"},
        "contact-us-form-03":  			{url:"$A/modules/c/contact-us-form-03.html",Table:"ccontact-us-vm"},
        "contact-us-app":  			    {url:"$A/apps/c/contact-us/index.html"},


        "d-c-t-data":      	  			{url:"$A/modules/d/data-collection-template-data.html","App":"demo",Table:"template",form_module:"d-c-t-form",router:1},
        "d-c-t-form":      	 		 	{url:"$A/modules/d/data-collection-template-form.html","App":"demo",Table:"template"},
        "date-data":      	  			{url:"$A/modules/d/date-data.html",Table:"Notes",form_module:"date-form",router:1},
        "date-form":      	 		 	{url:"$A/modules/d/date-form.html",Table:"Notes"},          
        "dass-data":	 	            {url:"$A/modules/d/depression-anxiety-stress-scales-data.html",Table:"dass",form_module:"dass-form"},
        "dass-form":	 	            {url:"$A/modules/d/depression-anxiety-stress-scales-form.html",Table:"dass"},

        "email-setup-data":      	  	{url:"$A/modules/e/email-setup-data.html",Table:"email-setup",form_module:"email-setup-form"},
        "email-setup-form":      	  	{url:"$A/modules/e/email-setup-form.html",Table:"email-setup"},         
        "enquiry-data":      	  		{url:"$A/modules/e/enquiry-data.html",Table:"vm-enquiry",form_module:"enquiry-form"},
        "enquiry-form":      	  		{url:"$A/modules/e/enquiry-form.html",Table:"vm-enquiry"},         
        "enquiry-app":      	  		{url:"$A/apps/e/enquiry/index.html"},         
        "event-data":      	  		    {url:"$A/modules/e/event-data.html",Table:"event-vm",form_module:"event-form"},
        "event-form":      	  		    {url:"$A/modules/e/event-form.html",Table:"event-vm"},         
        "event-daily":      	 	    {url:"$A/modules/e/event-daily.html",Table:"event-vm",router:1,
                                            event_form:"event-form"
                                        },         
        "event-monthly":      	 	    {url:"$A/modules/e/event-monthly.html",Table:"event-vm",router:1,
                                            event_daily:"event-daily",
                                            event_form:"event-form"
                                        },         
        "event-calendar-app":  		    {url:"$A/apps/e/event-calendar/index.html"},

        "ffs-data":      	  			{url:"$A/modules/f/flinders-fatigue-scale-data.html",Table:"ffs",form_module:"ffs-form"},
        "ffs-form":      	  			{url:"$A/modules/f/flinders-fatigue-scale-form.html",Table:"ffs"},
        "file-data":      	  			{url:"$A/modules/f/file-data.html",Table:"file",form_module:"file-form",router:1},
        "file-form":      	  			{url:"$A/modules/f/file-form.html",Table:"file"},
        "fss-data":      	  			{url:"$A/modules/f/fatigue-severity-scale-data.html",Table:"fss",form_module:"fss-form"},
        "fss-form":      	  			{url:"$A/modules/f/fatigue-severity-scale-form.html",Table:"fss"},
        "form-maker":                   {url:"$A/modules/f/form-maker.html",router:1},
        "fountains-illumination":		{url:"$A/modules/f/fountains-illumination.html",router:1},
        "fountains-illumination-app":	{url:"$A/apps/f/fountains-illumination-background/index.html"},
        "frame":                        {url:"$A/modules/f/frame.html"},
        "form-text-input-fields":       {url:"$A/modules/f/form-text-input-fields.html",router:1},
        "fitness":                      {url:"$A/modules/f/fitness.html",router:1},
        "fitness-app":                  {url:"$A/apps/f/fitness/index.html"},

        

        "home-woolcock": 		  		{url:"$A/modules/h/home-woolcock.html",router:1},
        "hello-world": 		  			{url:"$A/modules/h/hello-world.html",router:1},

        "incosact-data":   	  			{url:"$A/modules/i/incosact-data.html",Table:"incosact",form_module:"incosact-english-form",router:1},
        "incosact-english-form":  		{url:"$A/modules/i/incosact-english-form.html",Table:"incosact",router:1},
        "incosact-thanks-english":      {url:"$A/modules/i/incosact-thanks-english.html",router:1},
        "isi-data":      	  			{url:"$A/modules/i/insomnia-severity-index-data.html",Table:"isi",form_module:"isi-form"},
        "isi-form":      	  			{url:"$A/modules/i/insomnia-severity-index-form.html",Table:"isi"},

        "layout-with-fixed-header-and-footer-index":                {url:"$A/apps/l/layout-with-fixed-header-and-footer/index.html"},
        "layout-with-fixed-header-and-scrollable-footer-index":     {url:"$A/apps/l/layout-with-fixed-header-and-scrollable-footer/index.html"},
        "layout-with-scrollable-header-and-footer-index":           {url:"$A/apps/l/layout-with-scrollable-header-and-footer/index.html"},
        "layout-with-side-nav-and-fixed-footer-index":              {url:"$A/apps/l/layout-with-side-nav-and-fixed-footer/index.html"},
        "long-page":  		  	 		                            {url:"$A/modules/l/long-page.html",router:1},

        "medical-history-wf-data":      {url:"$A/modules/m/medical-history-wf-data.html",Table:"medical-history-wf",form_module:"medical-history-wf-form"},
        "medical-history-wf-form":      {url:"$A/modules/m/medical-history-wf-form.html",Table:"medical-history-wf"},
        "medication-data":              {url:"$A/modules/m/medication-data.html",Table:"medication",form_module:"medication-form"},
        "medication-form":              {url:"$A/modules/m/medication-form.html",Table:"medication"},
        "medical-practitioners-data":  	{url:"$A/modules/m/medical-practitioners-data.html",Table:"vm-medical-practitioners",form_module:"medical-practitioners-form",router:1},
        "medical-practitioners-form":  	{url:"$A/modules/m/medical-practitioners-form.html",Table:"vm-medical-practitioners"},
        "medical-practitioner-app":     {url:"$A/apps/m/medical-practitioner/index.html"},

        "manager-list-data":  	        {url:"$A/modules/e/email-list-data.html",Table:"manager-list",form_module:"manager-list-form",router:1},
        "manager-list-form":  	        {url:"$A/modules/e/email-list-form.html",Table:"manager-list"},


        "nasa":  		  	  			{url:"$A/modules/n/nasa.html",router:1},
        "nasa-background-app":		    {url:"$A/apps/n/nasa-background/index.html"},
        "not-ready": 		            {url:"$A/modules/u/under-construction.html",text:"Not Ready",router:1},
        "nyan":  		  	  			{url:"$A/modules/n/nyan.html",router:1},
        "nyan-background-app":		    {url:"$A/apps/n/nyan-background/index.html"},

        "online-questionnaire-setup": 	    {url:"$A/modules/o/online-questionnaire-setup.html",Table:"participant"},
        

        "panel":    		  			{url:"$A/modules/p/panel.html",router:1},
        "particle":  		  			{url:"$A/modules/p/particle.html",router:1},
        "particle-background-app":      {url:"$A/apps/p/particle-background/index.html"},
        "prices":  		  	  			{url:"$A/modules/p/prices.html",router:1},
        "price-02":  		  	 		{url:"$A/modules/p/price-02.html",router:1},
        "psqi-data":                    {url:"$A/modules/p/pittsburgh-sleep-quality-index-data.html",Table:"psqi",form_module:"psqi-form"},
        "psqi-form":   			        {url:"$A/modules/p/pittsburgh-sleep-quality-index-form.html",Table:"psqi"},

        "predefined-transaction-item-data": {url:"$A/modules/p/predefined-transaction-item-data.html",Table:"predefined-transaction-item",form_module:"predefined-transaction-item-form"},
        "predefined-transaction-item-form": {url:"$A/modules/p/predefined-transaction-item-form.html",Table:"predefined-transaction-item"},

        "purchase-order-data-s": {url:"$A/modules/p/purchase-order-data-s.html",Table:"purchase-order",form_module:"purchase-order-form-s",router:1},
        "purchase-order-form-s": {url:"$A/modules/p/purchase-order-form-s.html",Table:"purchase-order",
                                        "manager_list_table":"manager-list",
                                        "accountant_list_table":"accountant-list",
                                        "email_to_manager":"purchase-order-email-to-manager"
                                    },

        "purchase-order-data-p1": {url:"$A/modules/p/purchase-order-data-p1.html",Table:"purchase-order",form_module:"purchase-order-form-p1",router:1},
        "purchase-order-form-p1": {url:"$A/modules/p/purchase-order-form-p1.html",Table:"purchase-order",
                                        "manager_list_table":"manager-list",
                                        "accountant_list_table":"accountant-list",
                                        "email_to_accountant":"purchase-order-email-to-accountant"
                                    },

        "purchase-order-data-p2": {url:"$A/modules/p/purchase-order-data-p2.html",Table:"purchase-order",form_module:"purchase-order-form-p2",router:1},
        "purchase-order-form-p2": {url:"$A/modules/p/purchase-order-form-p2.html",Table:"purchase-order",
                                        "manager_list_table":"manager-list",
                                        "accountant_list_table":"accountant-list",
                                        "email_to_requester":"purchase-order-email-to-requester"
                                    },
                                                                

        "purchase-order-email-to-manager":      {url:"$A/modules/p/purchase-order-email-to-manager.html",Table:"email-setup"},
        "purchase-order-email-to-accountant":   {url:"$A/modules/p/purchase-order-email-to-accountant.html",Table:"email-setup"},
        "purchase-order-email-to-requester":    {url:"$A/modules/p/purchase-order-email-to-requester.html",Table:"email-setup"},

        "purchase-order-request-app":           {url:"$A/apps/p/purchase-order-request/index.html"},

        "quest-panel":                  {url:"$A/modules/o/online-questionnaire-panel.html"},

        "radio-data":      	  			{url:"$A/modules/r/radio-data.html",Table:"radio",form_module:"radio-form",router:1},
        "radio-form":      	  			{url:"$A/modules/r/radio-form.html",Table:"radio"},
        

        
        "reactjs-hello-world":                  {url:"$A/modules/r/reactjs-hello-world.html",router:1},
        "reactjs-tic-tac-toe-passing-value":    {url:"$A/modules/r/reactjs-tic-tac-toe-passing-value.html",router:1},
        "reactjs-tic-tac-toe-starter":          {url:"$A/modules/r/reactjs-tic-tac-toe-starter.html",router:1},

        "screen-failure":      			{url:"$A/modules/s/screen-failure-thank-you-page.html",router:1},
        "select-data":        			{url:"$A/modules/s/select-data.html",Table:"select",form_module:"select-form",router:1},
        "select-form":        			{url:"$A/modules/s/select-form.html",Table:"select"},
        "services":  	  	  			{url:"$A/modules/s/services.html",router:1},
        "short-page":  		  	 		{url:"$A/modules/s/short-page.html",router:1},
        "snow":  		  	  			{url:"$A/modules/s/snow.html",router:1},
        "snow-background-app":		    {url:"$A/apps/s/snow-background/index.html"},
        "survey-data":      	  		{url:"$A/modules/s/survey-data.html",Table:"survey-vm",form_module:"survey-form"},
        "survey-form":      	  		{url:"$A/modules/s/survey-form.html",Table:"survey-vm"},         
        "survey-app":      	  		    {url:"$A/apps/s/survey/index.html"},         
        "success":  		  	  		{url:"$A/modules/s/success.html",router:1},
        "success-app":  		  	  	{url:"$A/apps/s/success/index.html"},
        "simple-app":  		  	  	    {url:"$A/apps/s/simple/index.html"},

        "text-input-data":    			{url:"$A/modules/t/text-input-data.html",Table:"text-input",form_module:"text-input-form",router:1},
        "text-input-form":    			{url:"$A/modules/t/text-input-form.html",Table:"text-input"},
        "tom-knowledge-base-data":    	{url:"https://www.tomliweb.com/modules/t/tom-knowledge-base-data.html",Table:"tom-knowledge-base",form_module:"tom-knowledge-base-form",router:1},
        "tom-knowledge-base-form":    	{url:"https://www.tomliweb.com/modules/t/tom-knowledge-base-form.html",Table:"tom-knowledge-base"},
        "text-input-form":    			{url:"$A/modules/t/text-input-form.html",Table:"text-input"},
        
        "trainers":  		  			{url:"$A/modules/t/trainers.html",router:1},
        
        "transaction-y-q-tax-return-data":  {url:"$A/modules/t/transaction-year-quarter-tax-return-data.html",Table:"transaction",form_module:"transaction-form",router:1},
        "transaction-y-q-bas-data":    		{url:"$A/modules/t/transaction-year-quarter-bas-data.html",Table:"transaction",form_module:"transaction-form",router:1},
        "transaction-y-q-data":    		    {url:"$A/modules/t/transaction-year-quarter-data.html",Table:"transaction",form_module:"transaction-form",router:1},
        
        "transaction-bas-data":   		{url:"$A/modules/t/transaction-bas-data.html",Table:"transaction",form_module:"transaction-form",router:1},
        "transaction-tax-return-data":  {url:"$A/modules/t/transaction-tax-return-data.html",Table:"transaction",form_module:"transaction-form",router:1},
        "transaction-data":    			{url:"$A/modules/t/transaction-data.html",Table:"transaction",form_module:"transaction-form",router:1},
        "transaction-form":    			{url:"$A/modules/t/transaction-form.html",Table:"transaction",
                                            item_table:'predefined-transaction-item'
                                        },

        "under-construction": 		    {url:"$A/modules/u/under-construction.html",text:"Under Construction",router:1},

        "visit-date-data":    			{url:"$A/modules/v/visit-date-data.html",Table:"visit-date",form_module:"visit-date-form"},
        "visit-date-form":    			{url:"$A/modules/v/visit-date-form.html",Table:"visit-date"},
        
        "woolcock-template-app":		{url:"$A/apps/w/woolcock-template/index.html"},
    
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();