import Accordion from '../components/Accordion.js';
function AccordionPage() {
  const items = [
    {
      id: 1,
      label: 'What is Lorem Ipsum?',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry..',
    },
    {
      id: 2,
      label: 'Where does it come from?',
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
      id: 3,
      label: 'Why do we use it?',
      content:
        'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.',
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
