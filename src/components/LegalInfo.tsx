import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, FileText, Building2, Award } from "lucide-react";

export const LegalInfo = () => {
  const content = {
    title: "Юридическая информация",
    subtitle: "Официальные данные и документы",
    
    companyInfo: {
      title: "Реквизиты организации",
      data: [
        { label: "Полное наименование", value: "ООО \"АртиДом-Ритейл\"" },
        { label: "ИНН", value: "6663123456" },
        { label: "КПП", value: "667801001" },
        { label: "ОГРН", value: "1236600123456" },
        { label: "ОКПО", value: "20627735" },
        { label: "Юридический адрес", value: "г. Березовский, Свердловской обл., ДНП \"Шишкино\", ул. Сосновая, 23" },
        { label: "Банк", value: "Филиал \"Екатеринбургский\" АО \"АЛЬФА-БАНК\"" },
        { label: "Р/С", value: "40702810538060002119" },
        { label: "К/С", value: "30101810100000000964" },
        { label: "БИК", value: "046577964" },
        { label: "Директор", value: "Казанцев Владимир Михайлович" },
        { label: "Телефон", value: "+7-912-0-370-170" },
        { label: "E-mail", value: "director@a-96.ru" }
      ]
    },

    privacy: {
      title: "Политика конфиденциальности",
      subtitle: "В соответствии с ФЗ-152 \"О персональных данных\"",
      points: [
        "Мы собираем только необходимые для работы персональные данные",
        "Данные используются исключительно для связи с клиентами и выполнения заказов",
        "Персональные данные не передаются третьим лицам без согласия",
        "Обеспечивается защита данных согласно требованиям законодательства РФ",
        "Вы можете запросить удаление своих данных в любое время"
      ]
    },

    certificates: {
      title: "Документы компании",
      items: [
        { name: "Свидетельство о регистрации ООО", number: "ОГРН 1236600123456", valid: "бессрочно" },
        { name: "Справка о налоговой задолженности", number: "от 15.01.2025", valid: "до 15.04.2025" }
      ]
    },

    guarantees: {
      title: "Гарантийные обязательства",
      terms: [
        { service: "Изделия из металла", warranty: "3 года", coverage: "Коррозия, деформация каркаса" },
        { service: "Покрытие и окраска", warranty: "2 года", coverage: "Выцветание, отслаивание" },
        { service: "Электрооборудование", warranty: "1 год", coverage: "Выход из строя компонентов" },
        { service: "Монтажные работы", warranty: "2 года", coverage: "Дефекты установки" }
      ]
    }
  };

  return (
    <section id="legal-info" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {content.title}
          </h2>
          <p className="text-xl text-gold font-medium">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Company Info */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Building2 className="w-5 h-5 text-gold" />
                <span>{content.companyInfo.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {content.companyInfo.data.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="text-sm text-muted-foreground mb-1 sm:mb-0">{item.label}:</span>
                  <span className="text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Privacy Policy */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-gold" />
                <span>{content.privacy.title}</span>
              </CardTitle>
              <p className="text-sm text-muted-foreground">{content.privacy.subtitle}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {content.privacy.points.map((point, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Company Documents */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-gold" />
                <span>{content.certificates.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {content.certificates.items.map((cert, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h4 className="font-medium text-sm">{cert.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {cert.valid}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{cert.number}</p>
                  {index < content.certificates.items.length - 1 && (
                    <Separator className="my-3" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Guarantees */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-gold" />
                <span>{content.guarantees.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {content.guarantees.terms.map((term, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">{term.service}</h4>
                    <Badge className="bg-gold text-gold-foreground text-xs">
                      {term.warranty}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{term.coverage}</p>
                  {index < content.guarantees.terms.length - 1 && (
                    <Separator className="my-3" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="border-border/50 bg-muted/50">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <h3 className="font-semibold text-sm">Важная информация</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-muted-foreground">
                  <div>
                    <p className="mb-2"><strong>Согласие на обработку ПД:</strong></p>
                    <p>Отправляя форму, вы соглашаетесь на обработку персональных данных в соответствии с ФЗ-152.</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>Ответственность:</strong></p>
                    <p>Вся информация носит справочный характер. Окончательные условия согласовываются при заключении договора.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};