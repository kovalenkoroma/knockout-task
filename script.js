function ViewModel(){
    this.mail=ko.observable();
    this.topic=ko.observable();
    this.message=ko.observable();
    this.literature=[
        "О компании QAP INT.",
        "Преимущества использования инструмента для Вашего бизнеса.",
        "Перспективы сотрудничества с QAP INT.",
        "Описание решения для разработки HTML-5 презентаций.",
        "Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com(русский).",
        "Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com(english)."
    ];
    this.selectedLiterature=ko.observableArray([]);
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
