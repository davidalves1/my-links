import { shallowMount } from '@vue/test-utils';
import LinkCard from './LinkCard.vue';

describe('<LinkCard />', () => {
  it('should render the component corretly', () => {
    const props = {
      url: 'www.test.com',
      description: 'test',
    };
    const wrapper = shallowMount(LinkCard, { props });
    const link = wrapper.find('a');
    const allP = wrapper.findAll('p');

    console.log('🚀 ~ it ~ allP.at(0)', allP[0])
    expect(link.attributes().href).toBe(props.url);
    // expect(allP.at(0)).toBe(props.url);
  });
});
