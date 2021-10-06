
import ReactDOM from 'react-dom';
import Intro from '../../pages/Intro';



describe('Intro Page', () => {
  it('should be able to add new item', () => {
    const component = <NewItem to="/NewItemForm" />;

    const container = document.createElement('div');
    ReactDOM.render(component, container);
    expect(container.getElementsByClassName).toMatch('<NewItem to="/NewItemForm" />');
  });

});