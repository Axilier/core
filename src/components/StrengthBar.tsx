import React from 'react';
import { StrengthBarProps } from '../Types';
import styles from '../css/StrengthBar.module.css';

const StrengthBar = ({ currentStrength }: StrengthBarProps): JSX.Element => (
    <div id={'strengthBar'} className={styles.main}>
        {Array.from(Array(4)).map((bar, index) => (
            <div
                /* eslint-disable-next-line react/no-array-index-key */
                key={`strengthIndicator-${index}`}
                className={styles.bar}
                style={{
                    backgroundColor:
                        index < currentStrength
                            ? (() => {
                                  switch (currentStrength) {
                                      case 1:
                                          return '#E01414';
                                      case 2:
                                          return '#E07C14';
                                      case 3:
                                          return '#E0A914';
                                      case 4:
                                          return '#37B411';
                                      default:
                                          return '#37B411';
                                  }
                              })()
                            : '#E6E6E6',
                }}
            />
        ))}
    </div>
);

export default StrengthBar;
