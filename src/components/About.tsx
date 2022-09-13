import React from 'react';
import styles from './About.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubSquare,
  faLinkedin,
  faBehanceSquare,
  faDribbbleSquare,
} from '@fortawesome/free-brands-svg-icons';

function About() {
  return (
    <div className={styles.aboutsection}>
      <div className={styles.avatarcontainer}>
        {/* <img className={styles.avatar} src={avatar} alt="" /> */}
        <svg
          width="375"
          height="375"
          viewBox="0 0 375 375"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="avatar-anim">
            <path
              id="Vector"
              d="M154.98 247.07C144.04 250.07 133.42 253.64 124.22 260.7C119.46 264.35 116.39 269.21 112.93 273.85C107.49 275.62 102.53 278.31 97.93 281.7C83.52 290.21 73.25 302.67 64.62 317.23C55.26 306.57 48.11 295.04 42.23 282.72C29.93 256.94 24.87 229.61 27.33 201.27C31.15 157.19 50.08 120.53 83.69 91.56C89.63 86.44 95.96 81.89 102.61 77.75C103.97 76.9 105.17 75.49 107.08 76.05C107.57 77.58 106.94 79 106.62 80.44C102.81 97.95 103.46 115.1 110.64 131.75C102.57 134.85 99.1 139.81 99.05 148.4C99.02 154.23 98.96 160.06 99.07 165.88C99.22 173.79 103.7 179.31 111.4 181.29C111.81 184.41 112 187.57 112.65 190.64C117.92 215.51 131.4 233.87 155.22 243.94C155.14 244.98 155.07 246.02 154.99 247.06L154.98 247.07Z"
              fill="#65C8FE"
            />
            <path
              id="Vector_2"
              d="M261.98 273.94C258.71 270.91 257.04 266.67 253.69 263.6C243.86 254.59 231.84 250.32 219.34 246.94C219.22 246.11 219.11 245.28 218.99 244.45C246.9 232.63 260.13 210.53 263.18 181.31C269.7 179.96 273.87 175.93 274.97 169.5C276.45 160.85 276.5 152.04 274.94 143.4C273.79 137.02 269.67 132.92 263.03 131.79C264.32 128.97 265.79 126.21 266.89 123.31C272.67 108.1 272.58 92.5 269.72 76.75C283.1 83.88 294.49 93.59 304.7 104.6C326.03 127.62 339.88 154.59 345.2 185.6C353.39 233.35 342.06 276.29 312.52 314.56C310.67 316.96 309.69 317.1 308.04 314.28C300.27 301.01 290.26 289.82 276.97 281.8C272.42 278.35 267.39 275.81 262 273.94H261.98Z"
              fill="#65C8FE"
            />
            <path
              id="Vector_3"
              d="M218.98 252.95C218.61 261.87 220.5 270.96 217.86 279.69C213.33 294.65 200.83 302.61 183.74 301.96C171.35 301.49 159.4 291.05 156.12 277.65C154.12 269.47 155.17 261.15 155.26 252.87C156.67 253.3 158.11 253.63 159.48 254.18C169.87 258.32 180.67 260.6 191.81 259.68C201.15 258.91 210.28 256.6 218.99 252.95H218.98Z"
              fill="#FEDAB4"
            />
            <path
              id="Vector_4"
              d="M218.98 252.95C210.27 256.6 201.14 258.91 191.8 259.68C180.67 260.6 169.86 258.32 159.47 254.18C158.11 253.64 156.66 253.3 155.25 252.87C155.16 250.94 155.06 249 154.97 247.07C155.05 246.03 155.12 244.99 155.2 243.95C167.01 247.23 178.75 250.79 191.27 250.01C200.78 249.41 209.86 246.88 218.98 244.46C219.1 245.29 219.21 246.12 219.33 246.95C219.21 248.95 219.09 250.96 218.98 252.96V252.95Z"
              fill="#E4C3A0"
            />
            <path
              id="Vector_5"
              d="M236.99 311.98C236.99 326.58 236.98 341.18 236.97 355.78C236.97 356.94 237.13 358.15 236.87 359.25C236.3 361.69 234.76 363.46 232.23 363.8C229.88 364.11 228.78 362.29 227.77 360.49C226.82 358.79 226.98 356.96 226.98 355.15C226.98 341.71 226.98 328.27 226.98 314.84C230.12 313.2 233.66 312.96 236.99 311.99V311.98Z"
              fill="#F3F3F3"
            />
            <path
              id="Vector_6"
              d="M147.06 314.06C147.05 330.5 147.09 346.93 146.94 363.37C146.92 365.2 148.66 368.86 144.67 368.47C141.58 368.17 137.76 368.13 137.89 362.62C138.28 346.03 138.08 329.42 138.1 312.82C141.08 313.23 144.07 313.65 147.05 314.06H147.06Z"
              fill="#F3F3F3"
            />
            <path
              id="Vector_7"
              d="M147.06 314.06C144.08 313.65 141.09 313.23 138.11 312.82C132.53 310.42 126.88 308.15 121.38 305.58C110.62 300.56 101.57 293.77 97.93 281.7C102.53 278.31 107.49 275.62 112.93 273.85C111.38 281.9 113.91 288.7 119.23 294.69C129.59 306.36 143.3 311.6 158 314.94C158.01 315.29 158.02 315.64 158.04 315.99C154.23 316.2 150.73 314.64 147.06 314.06V314.06Z"
              fill="#D6D6D7"
            />
            <path
              id="Vector_8"
              d="M236.99 311.98C233.66 312.96 230.12 313.19 226.98 314.83C223.31 315.21 219.63 315.6 215.96 315.99C215.98 315.65 216 315.3 216.02 314.96C228.45 312.68 239.9 307.92 249.89 300.24C258.36 293.73 263.34 285.18 261.98 273.94C267.36 275.81 272.39 278.35 276.95 281.8C271.23 297.29 258.38 304.28 243.99 309.44C241.66 310.28 239.33 311.13 237 311.98H236.99Z"
              fill="#D6D6D7"
            />
            <path
              id="Vector_9"
              d="M216.02 314.96C216 315.3 215.98 315.65 215.96 315.99C211.4 317.6 207.96 318.04 201.86 317.53C207.42 316.52 211.72 315.74 216.02 314.96Z"
              fill="#F3F3F3"
            />
            <path
              id="Vector_10"
              d="M158.04 315.99C158.03 315.64 158.02 315.29 158 314.94C160.05 315.36 162.1 315.77 164.14 316.19C162 316.91 159.91 317.63 158.03 315.99H158.04Z"
              fill="#F3F3F3"
            />
            <path
              id="Vector_11"
              d="M165.87 317.59C168.65 316.74 170.22 316.81 171.82 317.59H165.87Z"
              fill="#F3F3F3"
            />
            <path
              id="Vector_12"
              d="M107.82 74.97C107.84 75.54 107.83 76.08 107.05 76.09C106.83 75.39 107.3 75.17 107.82 74.97Z"
              fill="#65C8FE"
            />
            <path
              id="Vector_13"
              d="M110.63 131.75C110.99 141.47 111.48 151.2 111.67 160.92C111.8 167.7 111.5 174.5 111.39 181.29C103.7 179.31 99.21 173.79 99.06 165.88C98.95 160.05 99.01 154.22 99.04 148.4C99.09 139.81 102.57 134.85 110.63 131.75V131.75Z"
              fill="#F8D6B1"
            />
            <path
              id="Vector_14"
              d="M263.18 181.31C263.13 164.81 263.07 148.3 263.02 131.8C269.66 132.93 273.78 137.03 274.93 143.41C276.49 152.05 276.45 160.86 274.96 169.51C273.86 175.94 269.69 179.97 263.17 181.32L263.18 181.31Z"
              fill="#F7D7B3"
            />
            <path
              id="Vector_15"
              d="M172.09 193.65C177.76 193.81 181.89 193.76 185.86 192.17C186.57 191.89 187.57 191.77 188.25 192.04C193.36 194.1 198.7 193.6 204 193.7C214.88 193.9 222.58 204.81 219.16 215.26C217.24 221.14 213.53 225.84 208.4 229.21C204.38 231.85 200.48 232.58 196.3 228.59C190.86 223.41 183.5 223.57 177.87 228.88C174.93 231.65 172.08 231.82 168.78 230.67C157.59 226.76 151.83 211.79 157.2 201.32C160.76 194.38 166.66 193.08 172.08 193.65H172.09ZM208.61 197.05C194.85 197.05 181.09 197.06 167.33 197.07C164.02 196.32 161.39 196.87 162.24 201.02C163.4 206.71 165.53 212.01 170.73 215.4C179.77 224.35 196.2 224.3 203.45 215.29C209.39 211.97 211.44 206.33 212.29 200.09C212.64 197.52 211.22 196.41 208.62 197.05H208.61Z"
              fill="#FAD6B1"
            />
            <path
              id="Vector_16"
              d="M174.987 182.428C173.654 179.485 168.558 177.666 170.395 174.319C171.705 171.927 176.253 173.533 179.345 173.465C186.055 173.319 192.776 173.353 199.497 173.465C201.255 173.488 203.619 172.5 204.65 174.431C205.792 176.543 203.877 178.216 202.678 179.833C202.017 180.732 201.334 181.608 200.662 182.484C192.092 184.662 183.534 184.359 174.987 182.428V182.428Z"
              fill="#D4B695"
            />
            <path
              id="Vector_17"
              d="M261.84 131.47C257.59 121.25 257.48 110.03 254.15 99.56C252.18 93.35 249.24 88.09 244.28 83.78C239.53 79.64 234.68 75.47 231.59 69.82C230.61 68.03 229.75 68.55 228.54 69.38C212.93 79.97 195.48 80.5 177.66 78.43C165.94 77.07 154.82 73.86 145.71 65.81C143.97 64.27 142.75 64.84 141.48 66.18C133.57 74.52 125.72 82.9 121.28 93.79C115.8 107.2 114.08 121.59 114.36 135.59C114.61 147.62 115.08 159.83 116.26 171.9C117.55 185.14 121.16 197.05 134.84 203.16C143.7 207.11 146.8 206.42 149.67 197.35C152.26 189.15 158.16 185.31 165.72 183.3C169.04 182.42 172.59 182.44 176.04 182.04C174.85 179.42 170.3 177.8 171.94 174.82C173.11 172.69 177.17 174.12 179.93 174.06C185.92 173.93 191.92 173.96 197.92 174.06C199.49 174.08 201.6 173.2 202.52 174.92C203.54 176.8 201.83 178.29 200.76 179.73C200.17 180.53 199.56 181.31 198.96 182.09C211.78 182.67 222.43 186.14 226.19 200.49C227.58 205.8 230.62 206.58 236.41 204.55C250.15 199.74 256.04 189.31 258 175.52C260.04 161.21 256.95 146.47 261.85 132.44C261.95 132.15 261.98 131.76 261.87 131.49L261.84 131.47ZM168.51 121.92C168.17 124.39 166.1 124.23 163.71 123.96C156.5 122.18 149.09 123.37 141.88 126.31C138.93 127.51 136.31 129.25 134.2 131.66C132.83 133.24 131.43 134.97 129.34 132.9C127.34 130.92 128.95 129.19 130.31 127.77C135.84 122 142.9 119.31 150.61 118.24C155.37 117.58 160.2 117.55 164.95 118.65C166.74 119.06 168.85 119.46 168.51 121.91V121.92ZM244.99 133.2C243.69 134.24 242.45 133.87 241.44 132.8C232.97 123.8 222.44 122.07 210.83 123.95C208.87 124.27 206.48 124.66 206.13 121.82C205.83 119.4 208.02 118.89 209.8 118.61C212.58 118.16 215.4 117.99 216.99 117.83C227.29 118 235.65 120.18 242.64 126.28C243.75 127.25 244.78 128.39 245.57 129.64C246.32 130.84 246.24 132.2 244.99 133.21V133.2Z"
              fill="#FDD9B2"
            />
            <path
              id="Vector_18"
              d="M170.73 215.4C165.53 212.01 163.4 206.71 162.24 201.02C161.39 196.87 164.02 196.32 167.33 197.07C167.95 201.42 170.57 203.24 174.84 203.21C183.58 203.15 192.33 203.15 201.07 203.21C205.37 203.24 207.92 201.33 208.61 197.05C211.21 196.41 212.63 197.52 212.28 200.09C211.43 206.33 209.38 211.96 203.44 215.29C196.91 207.68 188.02 214.1 180.48 211.57C177.34 210.52 173.34 212.43 170.72 215.4H170.73Z"
              fill="#55483D"
            />
            <path
              id="Vector_19"
              d="M170.73 215.4C173.35 212.43 177.35 210.52 180.49 211.57C188.03 214.1 196.91 207.68 203.45 215.29C196.2 224.3 179.77 224.35 170.74 215.4H170.73Z"
              fill="#FA516D"
            />
            <path
              id="Vector_20"
              d="M208.61 197.05C207.92 201.34 205.37 203.24 201.07 203.21C192.33 203.15 183.58 203.15 174.84 203.21C170.57 203.24 167.95 201.42 167.33 197.07C181.09 197.07 194.85 197.06 208.61 197.05V197.05Z"
              fill="#FEFEFE"
            />
            <path
              id="Vector_21"
              d="M269.7 76.75C272.56 92.5 272.65 108.1 266.87 123.31C265.77 126.21 264.31 128.97 263.01 131.79C263.06 148.3 263.12 164.8 263.17 181.3C260.13 210.53 246.89 232.62 218.98 244.45C209.86 246.87 200.78 249.41 191.27 250C178.75 250.78 167.01 247.22 155.2 243.94C131.38 233.86 117.9 215.51 112.62 190.64C111.97 187.57 111.78 184.41 111.37 181.29C111.48 174.5 111.78 167.71 111.65 160.92C111.47 151.19 110.97 141.47 110.61 131.75C103.43 115.11 102.79 97.95 106.59 80.44C106.9 79 107.53 77.58 107.05 76.05L107.03 76.09C107.81 76.08 107.82 75.54 107.8 74.97C110.85 65.61 115.03 57.05 124.14 51.99C125.08 51.47 125.49 50.55 125.68 49.55C129.5 29.85 143.59 20.6 161.14 15.23C172.33 11.8 183.5 13.51 194.59 16.56C203.54 19.02 212.42 22.18 222.01 20.33C225.97 19.57 229.78 18.46 233.4 16.74C240.84 13.2 248.42 11.19 255.33 17.32C262.45 23.63 263.03 32.03 261.28 40.79C260.58 44.27 259.11 47.44 256.87 50.19C255.77 51.54 255.33 52.47 256.81 53.93C263.26 60.3 266.6 68.46 269.69 76.75H269.7ZM176.02 182.03C183.66 183.75 191.3 184.02 198.94 182.08C211.76 182.66 222.41 186.13 226.17 200.48C227.56 205.79 230.6 206.57 236.39 204.54C250.13 199.73 256.02 189.3 257.98 175.51C260.02 161.2 256.93 146.46 261.83 132.43C261.93 132.14 261.96 131.75 261.85 131.48C257.6 121.26 257.49 110.04 254.16 99.57C252.19 93.36 249.25 88.1 244.29 83.79C239.54 79.65 234.69 75.48 231.6 69.83C230.62 68.04 229.76 68.56 228.55 69.39C212.94 79.98 195.49 80.51 177.67 78.44C165.95 77.08 154.83 73.87 145.72 65.82C143.98 64.28 142.76 64.85 141.49 66.19C133.58 74.53 125.73 82.91 121.29 93.8C115.81 107.21 114.09 121.6 114.37 135.6C114.62 147.63 115.09 159.84 116.27 171.91C117.56 185.15 121.17 197.06 134.85 203.17C143.71 207.12 146.81 206.43 149.68 197.36C152.27 189.16 158.17 185.32 165.73 183.31C169.05 182.43 172.6 182.45 176.05 182.05L176.02 182.03ZM172.09 193.65C166.66 193.08 160.76 194.39 157.21 201.32C151.84 211.79 157.6 226.76 168.79 230.67C172.09 231.82 174.94 231.65 177.88 228.88C183.51 223.57 190.86 223.41 196.31 228.59C200.5 232.57 204.4 231.85 208.41 229.21C213.54 225.84 217.25 221.13 219.17 215.26C222.59 204.81 214.89 193.9 204.01 193.7C198.71 193.6 193.36 194.1 188.26 192.04C187.58 191.77 186.58 191.88 185.87 192.17C181.9 193.76 177.76 193.81 172.1 193.65H172.09Z"
              fill="#734335"
            />
            <path
              id="right-eye"
              d="M230.93 150.01C230.82 154.55 227.01 158.13 222.52 157.91C218.24 157.69 214.81 154.01 214.9 149.71C214.99 145.17 218.69 141.75 223.33 141.93C227.75 142.11 231.03 145.6 230.93 150.01V150.01Z"
              fill="#6D5E4D"
            />
            <path
              id="left-eye"
              d="M161.53 149.82C161.51 154.04 157.78 157.81 153.55 157.9C149.12 158 145.2 154.06 145.3 149.61C145.4 145.3 149.07 141.86 153.5 141.92C157.93 141.98 161.55 145.54 161.52 149.82H161.53Z"
              fill="#6D5E4D"
            />
            <path id={styles.lefteyelid} d="M164 122H142V139H164V122Z" fill="#FDD9B2" />
            <path id={styles.righteyelid} d="M234 122H212V139H234V122Z" fill="#FDD9B2" />
            <path
              id="right-eyebrow"
              d="M216.99 117.83C227.29 118 235.65 120.18 242.65 126.28C243.76 127.25 244.79 128.39 245.58 129.64C246.33 130.84 246.25 132.2 245 133.21C243.7 134.25 242.46 133.88 241.45 132.81C232.98 123.81 222.45 122.08 210.84 123.96C208.88 124.28 206.49 124.67 206.14 121.83C205.84 119.41 208.03 118.9 209.81 118.62C212.59 118.17 215.41 118 217 117.84L216.99 117.83Z"
              fill="#6D5E4D"
            />
            <path
              id="left-eyebrow"
              d="M163.71 123.96C156.5 122.18 149.09 123.37 141.88 126.31C138.93 127.51 136.31 129.25 134.2 131.66C132.83 133.24 131.43 134.97 129.34 132.9C127.34 130.92 128.95 129.19 130.31 127.77C135.84 122 142.9 119.31 150.61 118.24C155.37 117.58 160.2 117.55 164.95 118.65C166.74 119.06 168.85 119.46 168.51 121.91C168.17 124.38 166.1 124.22 163.71 123.95V123.96Z"
              fill="#6D5E4D"
            />
          </g>
        </svg>
      </div>
      <div className={styles.aboutinfocontainer}>
        <h1 className={styles.aboutheadline}>Alex Feller</h1>
        <h3 className={styles.abouttitle}>Visual Designer &amp; Front End Developer</h3>
        <p className={styles.aboutparagraph}>
          I am currently a visual designer and front-end developer from Virginia with 5 years of
          experience working on b2b experiences and I have a passion for all things design and
          development! I enjoy solving complex problems and putting user experience front and center
          of all my solutions. Creating prototypes and getting user feedback to make meaningful
          change is what I strive to accomplish daily. I also enjoy developing and bringing designs
          to life whether it's creating components or complete experiences.
        </p>
        <div className={styles.sociallinkscontainer}>
          <a className={styles.aboutlink} href="https://www.linkedin.com/in/aef2662/">
            <FontAwesomeIcon className={styles.socialicon} icon={faLinkedin} />
          </a>
          <a className={styles.aboutlink} href="https://www.behance.net/alexfeller1">
            <FontAwesomeIcon className={styles.socialicon} icon={faBehanceSquare} />
          </a>
          <a className={styles.aboutlink} href="https://github.com/AlexF26">
            <FontAwesomeIcon className={styles.socialicon} icon={faGithubSquare} />
          </a>
          <a className={styles.aboutlink} href="https://dribbble.com/AEF2662">
            <FontAwesomeIcon className={styles.socialicon} icon={faDribbbleSquare} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
