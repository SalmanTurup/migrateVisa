import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FAQComponent {

  constructor(
    private router: Router,
  ) {
  }


  faqs = [
    { question: 'What is the purpose of a visa?', answer: 'Lorem Ipsum is simply dummy text...' },
    { question: 'What documents are required for a visa application?', answer: 'You typically need...' },
    { question: 'How much does it cost to work with your agency?', answer: 'Our pricing depends...' },
    { question: 'What is the difference between a tourist visa?', answer: 'A tourist visa is for...' },
    { question: 'Can I work with a tourist visa?', answer: 'No, working on a tourist visa is...' },
    { question: 'How long does it take to process a visa application?', answer: 'It usually takes...' },
    { question: 'Is there an age limit for applying for a visa?', answer: 'Most countries have no...' },
    { question: 'Can I apply for a visa if I have a criminal record?', answer: 'It depends on the...' },
    { question: 'What happens if my visa application is denied?', answer: 'You may appeal the...' },
    { question: 'How long does it take for you to complete a project?', answer: 'Project timelines...' },
  ];

  leftFaqs = this.faqs.slice(0, Math.ceil(this.faqs.length / 2));
  rightFaqs = this.faqs.slice(Math.ceil(this.faqs.length / 2));

  pageNavigate(path: string) {
    this.router.navigate([`/${path}`]);
  }
}
