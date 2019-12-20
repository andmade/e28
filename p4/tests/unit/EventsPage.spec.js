import { expect } from 'chai';
import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import EventsPage from '@/pages/EventsPage.vue';

describe('EventsPage.vue', () => {
  let event = {
    '139201859': {
      eventID: 139201859,
      title: '2020 Lilac Sunday T-shirt Design Contest',
      featured: false,
      description:
        'Create a piece of Arnold Arboretum history: Enter our contest to design the 2020 Lilac Sunday t-shirt!<br /> <br /> The Arnold Arboretum of Harvard University invites artists of all ages to submit logo designs for the Lilac Sunday 2020 T-shirt.<br /> <br /> Lilac-themed t-shirts have been a tradition for many years, and continue to be a highly anticipated and popular memento of this event.<br /> <br /> Find details at <a href="http://bit.ly/lilac-t-shirt-contest" target="_blank" title="http://bit.ly/lilac-t-shirt-contest">bit.ly&#8230;</a><br /> <br /> Questions? Email <a href="mailto:arbweb@arnarb.harvard.edu" target="_blank">arbweb@arnarb.harvard.edu</a><br /> <br /> Submission deadline is Jan. 15, 2020',
      location: 'Online',
      link:
        '<a href="https://www.arboretum.harvard.edu/news-events/lilac-sunday/lilac-t-shirt-contest/" target="_blank" title="https://www.arboretum.harvard.edu/news-events/lilac-sunday/lilac-t-shirt-contest/">www.arboretum.harvard.edu&#8230;</a>',
      startDateTime: '2019-12-17T00:00:00',
      endDateTime: '2020-01-19T00:00:00',
      dateTimeFormatted: 'Tuesday, December 17, 2019 through Saturday, January 18, 2020',
      allDay: true,
      thumbnail: 'https://www.trumba.com/i/DgAvUMamX6xx8ZnRo4pBj39R.jpg',
      largeImage: 'https://www.trumba.com/i/DgD1d1fQSUgTAH9uf5guVQ0j.jpg',
      cost: 'Free',
      sponsor: 'Arnold Arboretum',
      contactInfo:
        '<a href="mailto:arbweb@arnarb.harvard.edu" target="_blank">arbweb@arnarb.harvard.edu</a>',
      categories: ['Art/Design']
    },
    '139028448': {
      eventID: 139028448,
      title:
        'Celebrating 50 Years of Sesame Street &amp; Honoring Harvard&#39;s Contributions to It',
      featured: false,
      description:
        'Sesame Street, one of the most iconic and powerful experiments in educational media, owes much of its success to the 50-year collaboration between the Children&#8217;s Television Workshop (now Sesame Workshop) and the Harvard Graduate School of Education.<br /> <br /> This is an ongoing exhibition on view through Jan. 18, 2020.',
      location:
        '<a href="http://maps.google.com/?q=6+Appian+Way%2c+Cambridge%2c+MA+02138" target="_blank">Gutman Library - 1st Floor<br />6 Appian Way<br />Cambridge</a>',
      link: '',
      startDateTime: '2019-12-17T00:00:00',
      endDateTime: '2019-12-18T00:00:00',
      dateTimeFormatted: 'Tuesday, December 17, 2019',
      allDay: true,
      thumbnail: 'https://www.trumba.com/i/DgASoWg2q6aJdys4YoiEyvk6.jpg',
      largeImage: 'https://www.trumba.com/i/DgCVtAtV1uL6oV3ZA3jmPk20.jpg',
      cost: 'Free',
      sponsor: 'Gutman Library',
      contactInfo: null,
      categories: ['Art/Design', 'Education']
    }
  };

  it('shows all the products', () => {
    const wrapper = mount(EventsPage, {
      computed: {
        events: function() {
          return [events];
        }
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    expect(wrapper.text()).to.include('2020 Lilac Sunday T-shirt Design Contest');
  });
});
