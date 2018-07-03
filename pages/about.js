import Link from 'next/link';
import Image from '../components/Image';

const About = () => (
  <div style={{ fontSize: '20px', color: 'blue' }}>
    <h1>About</h1>
    <Link href="/">
      <button>Back</button>
    </Link>
    <p>Blah blah blah</p>
    <Image />
  </div>
);

export default About;
