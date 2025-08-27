import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Building2, Award } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export type ModalType = "privacy" | "company" | "certificates" | "guarantees" | "terms";

interface LegalModalsProps {
  open: ModalType | null;
  onOpenChange: (open: boolean) => void;
}

export const LegalModals = ({ open, onOpenChange }: LegalModalsProps) => {
  // Содержимое из LegalInfo.tsx
  const content = {
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
    },

    terms: {
      title: "Условия использования",
      subtitle: "Правила использования сайта и услуг",
      points: [
        "Все материалы сайта являются объектами авторского права",
        "Копирование и использование материалов допускается только с письменного согласия",
        "Информация на сайте носит справочный характер и не является публичной офертой",
        "Окончательные условия согласовываются при заключении договора",
        "Компания не несет ответственности за решения, принятые на основе информации с сайта"
      ]
    }
  };

  return (
    <>
      {/* Политика конфиденциальности */}
      <Dialog open={open === "privacy"} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-gold" />
              {content.privacy.title}
            </DialogTitle>
            <DialogDescription>
              {content.privacy.subtitle}
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <ul className="space-y-4">
              {content.privacy.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">{point}</p>
                </li>
              ))}
            </ul>
            
            <Separator className="my-6" />
            
            <div className="bg-muted/50 p-4 rounded-md">
              <h4 className="font-medium mb-2 text-sm">Согласие на обработку ПД:</h4>
              <p className="text-sm text-muted-foreground">
                Отправляя форму, вы соглашаетесь на обработку персональных данных в соответствии с ФЗ-152.
                Вся информация обрабатывается и хранится в соответствии с требованиями законодательства РФ.
              </p>
            </div>
          </div>
          
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Закрыть</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Реквизиты компании */}
      <Dialog open={open === "company"} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-gold" />
              {content.companyInfo.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="py-4 space-y-4">
            {content.companyInfo.data.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:gap-8 pb-2 border-b border-border/30">
                <span className="text-sm text-muted-foreground mb-1 sm:mb-0 sm:w-1/3">{item.label}:</span>
                <span className="text-sm font-medium sm:w-2/3 text-right">{item.value}</span>
              </div>
            ))}
          </div>
          
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Закрыть</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Документы компании */}
      <Dialog open={open === "certificates"} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-gold" />
              {content.certificates.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="py-4">
            <div className="space-y-6">
              {content.certificates.items.map((cert, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h4 className="font-medium">{cert.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {cert.valid}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{cert.number}</p>
                  {index < content.certificates.items.length - 1 && (
                    <Separator className="my-3" />
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-muted/50 p-4 rounded-md">
              <p className="text-sm text-muted-foreground">
                Все документы доступны для ознакомления по запросу.
                Для получения копий документов свяжитесь с нами по телефону или электронной почте.
              </p>
            </div>
          </div>
          
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Закрыть</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Гарантийные обязательства */}
      <Dialog open={open === "guarantees"} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-gold" />
              {content.guarantees.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="py-4">
            <div className="space-y-6">
              {content.guarantees.terms.map((term, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{term.service}</h4>
                    <Badge className="bg-gold text-gold-foreground">
                      {term.warranty}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{term.coverage}</p>
                  {index < content.guarantees.terms.length - 1 && (
                    <Separator className="my-3" />
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-muted/50 p-4 rounded-md">
              <p className="text-sm text-muted-foreground">
                Гарантийные обязательства действуют при соблюдении правил эксплуатации.
                Полные условия гарантии предоставляются при заключении договора.
              </p>
            </div>
          </div>
          
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Закрыть</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Условия использования */}
      <Dialog open={open === "terms"} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-gold" />
              {content.terms.title}
            </DialogTitle>
            <DialogDescription>
              {content.terms.subtitle}
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <ul className="space-y-4">
              {content.terms.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">{point}</p>
                </li>
              ))}
            </ul>
            
            <Separator className="my-6" />
            
            <div className="bg-muted/50 p-4 rounded-md">
              <h4 className="font-medium mb-2 text-sm">Ответственность:</h4>
              <p className="text-sm text-muted-foreground">
                Вся информация носит справочный характер. 
                Окончательные условия согласовываются при заключении договора.
              </p>
            </div>
          </div>
          
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Закрыть</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};