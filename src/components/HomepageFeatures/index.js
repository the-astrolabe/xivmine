import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Up-to-Date Raid Guides',
    link: '', // No link for this title
    Svg: require('@site/static/img/ffxiv-symbol-white.svg').default,
    description: (
      <>
        Created and curated by FFXIV raiders, this website offers updated guides for older raid content, including guides, waymarks, and other community resources, all in one place.
      </>
    ),
  },
  {
    title: 'Discord Community',
    link: 'https://discord.gg/eByG8hraBM', // Add the link here
    Svg: require('@site/static/img/discord-symbol-white.svg').default,
    description: (
      <>
        Join our Discord Server to socialize amongst fellow raiders and share thoughts and opinions with other like-minded people!
      </>
    ),
  },
  {
    title: 'Community-Made Content',
    link: 'https://github.com/the-astrolabe/xivmine', // Add the link here
    Svg: require('@site/static/img/github-symbol-white.svg').default,
    description: (
      <>
        XIVMine is an open-source project, allowing anyone to contribute to the website. If you are interested in contributing, please visit the GitHub repository.
      </>
    ),
  },
];

function Feature({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
          ) : (
            title
          )}
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}