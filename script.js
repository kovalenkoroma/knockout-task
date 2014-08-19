function ViewModel(){
    this.mail=ko.observable();
    this.topic=ko.observable();
    this.message=ko.observable();
    this.literature=[
        {id:1,title:"О компании QAP INT."},
        {id:2,title:"Преимущества использования инструмента для Вашего бизнеса."},
        {id:3,title:"Перспективы сотрудничества с QAP INT."},
        {id:4,title:"Описание решения для разработки HTML-5 презентаций."},
        {id:5,title:"Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com(русский)."},
        {id:6,title:"Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com(english)."}
    ];
    this.selectedLiterature=ko.observableArray();
    this.selectedLiteratureList=ko.observable(false);
    this.letterSend=ko.observable(true);
    this.warning=ko.observable(false);
    this.submitInformation=function(){
        if(!this.mail() || !this.topic()|| !this.message())
        {
            this.selectedLiteratureList(false);
            this.warning(true);
        }
        else{
            this.selectedLiteratureList(true);
            this.warning(false);
            this.letterSend(false);
        }
    };
}
ko.applyBindings(new ViewModel());
