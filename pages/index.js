import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
import SuperComponent from '../components/SuperComponent';
import withAuth from '../components/hoc/withAuth';

class Index extends SuperComponent {
  static async getInitialProps() {
    let userData = {};
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      userData = response.data;
    } catch (err) {
      console.error(err);
    }
    return { initialData: [1, 2, 3, 4], userData };
  }

  constructor(props) {
    super(props);
    this.state = {
      title: 'I am Index Page',
    };
  }

  updateTitle = () => {
    this.setState({ title: 'I am Updated Index Page' });
  };

  render() {
    const { title } = this.state;
    const { userData, initialData } = this.props;
    console.log(initialData);
    return (
      <BaseLayout>
        <h1>hi</h1>
      </BaseLayout>
    );
  }
}

export default withAuth('ownder')(Index);
