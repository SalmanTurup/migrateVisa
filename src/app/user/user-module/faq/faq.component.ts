import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FAQComponent {
  faqs = [
    {
      question: 'What is the purpose of a visa?',
      answer: 'A visa grants permission to enter, stay, or work in a foreign country for a specified period. The purpose of a visa varies depending on its type, such as work, student, or tourist visas, allowing individuals to legally reside or travel to another country under the conditions outlined in the visa.'
    },
    {
      question: 'What documents are required for a visa application?',
      answer: 'The required documents vary based on the type of visa you\'re applying for, but generally, you\'ll need a valid passport, proof of financial support, application forms, photographs, and supporting documents like employment letters or educational records. Our team will guide you through the exact list of documents needed for your application.'
    },
    {
      question: 'How much does it cost to work with your agency?',
      answer: 'The cost of our services depends on the type of visa you’re applying for and the complexity of your case. We offer transparent pricing and provide an upfront estimate of costs after evaluating your specific situation. We’re committed to providing value for money while ensuring a smooth visa application process.'
    },
    {
      question: 'What is the difference between a tourist visa and other types of visas?',
      answer: 'A tourist visa allows individuals to visit a country for leisure, sightseeing, or visiting family and friends. Unlike work or student visas, tourist visas do not allow you to engage in employment or formal studies during your stay. Our experts can help determine the best visa type for your purpose of travel.'
    },
    {
      question: 'Can I work with a tourist visa?',
      answer: 'No, working on a tourist visa is illegal in most countries. Tourist visas are strictly for leisure or visiting purposes. If you\'re looking to work, you would need a work visa or other appropriate permits, depending on the country’s immigration rules.'
    },
    {
      question: 'How long does it take to process a visa application?',
      answer: 'The processing time varies depending on the type of visa, the country, and other factors like your individual case. Generally, visa applications take anywhere from a few weeks to several months. We provide an estimated processing time based on your visa category and guide you throughout the process.'
    },
    {
      question: 'Is there an age limit for applying for a visa?',
      answer: 'Most countries have no upper age limit for visa applications. However, specific visas may have age restrictions, such as working holiday visas or student visas, which are typically available to younger applicants. We’ll help you navigate the age-related requirements for your visa application.'
    },
    {
      question: 'Can I apply for a visa if I have a criminal record?',
      answer: 'It depends on the country and the nature of the offense. Some countries may refuse visa applications if the applicant has a criminal record, while others may allow entry under certain conditions. Our experts will assess your situation and provide advice on how to proceed if you have a criminal record.'
    },
    {
      question: 'What happens if my visa application is denied?',
      answer: 'If your visa application is denied, you may have the option to appeal or reapply. The reason for denial will be provided, and we will work with you to address any issues and strengthen your application for a successful second attempt.'
    },
    {
      question: 'How long does it take for you to complete a project?',
      answer: 'The timeline for completing a visa application project depends on the complexity of your case and the type of visa you are applying for. We will provide you with an estimated timeline and keep you informed every step of the way to ensure your application is completed as efficiently as possible.'
    }
  ];

  leftFaqs = this.faqs.slice(0, Math.ceil(this.faqs.length / 2));
  rightFaqs = this.faqs.slice(Math.ceil(this.faqs.length / 2));

  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  pageNavigate(path: string) {
    this.router.navigate([`/${path}`]);
  }
}
