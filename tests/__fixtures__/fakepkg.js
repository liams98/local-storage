const json = {
    ok: false,
    issues: {
      vulnerabilities: [
        {
          id: 'npm:ms:20151024',
          url: 'https://snyk.io/vuln/npm:ms:20151024',
          title: 'Regular Expression Denial of Service (DoS)',
          type: 'vuln',
          description:
            "## Overview\n[`ms`](https://www.npmjs.com/package/ms) is a tiny milisecond conversion utility.\nAffected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS) due to an incomplete fix for previously reported vulnerability [npm:ms:20151024](https://snyk.io/vuln/npm:ms:20151024). The fix limited the length of accepted input string to 10,000 characters, and turned to be insufficient making it possible to block the event loop for 0.3 seconds (on a typical laptop) with a specially crafted string passed to `ms()` function.\n\n*Proof of concept*\n```js\nms = require('ms');\nms('1'.repeat(9998) + 'Q') // Takes about ~0.3s\n```\n\n**Note:** Snyk's patch for this vulnerability limits input length to 100 characters. This new limit was deemed to be a breaking change by the author.\nBased on user feedback, we believe the risk of breakage is _very_ low, while the value to your security is much greater, and therefore opted to still capture this change in a patch for earlier versions as well.  Whenever patching security issues, we always suggest to run tests on your code to validate that nothing has been broken.\n\nFor more information on `Regular Expression Denial of Service (ReDoS)` attacks, go to our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).\n\n## Disclosure Timeline\n- Feb 9th, 2017 - Reported the issue to package owner.\n- Feb 11th, 2017 - Issue acknowledged by package owner.\n- April 12th, 2017 - Fix PR opened by Snyk Security Team.\n- May 15th, 2017 - Vulnerability published.\n- May 16th, 2017 - Issue fixed and version `2.0.0` released.\n- May 21th, 2017 - Patches released for versions `>=0.7.1, <=1.0.0`.\n\n## Remediation\nUpgrade `ms` to version 2.0.0 or higher.\n\n## References\n- [GitHub PR](https://github.com/zeit/ms/pull/89)\n- [GitHub Commit](https://github.com/zeit/ms/pull/89/commits/305f2ddcd4eff7cc7c518aca6bb2b2d2daad8fef)\n",
          from: ['ms@0.7.0'],
          package: 'ms',
          version: '0.7.0',
          severity: 'medium',
          language: 'js',
          packageManager: 'npm',
          semver: {
            vulnerable: '<=0.7.0',
            unaffected: '>0.7.0'
          },
          publicationTime: '2015-11-06T02:09:36.187Z',
          disclosureTime: '2015-10-24T20:39:59.852Z',
          isUpgradable: true,
          isPatchable: true,
          identifiers: {
            CWE: ['CWE-400'],
            CVE: ['CVE-2015-8315'],
            NSP: 46,
            ALTERNATIVE: ['SNYK-JS-MS-10064']
          },
          credit: ['Adam Baldwin'],
          CVSSv3: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L',
          cvssScore: 5.3,
          patches: [
            {
              urls: ['https://s3.amazonaws.com/snyk-rules-pre-repository/snapshots/master/patches/npm/ms/20151024/ms_20151024_0_0_48701f029417faf65e6f5e0b61a3cebe5436b07b.patch'],
              version: '=0.7.0',
              modificationTime: '2015-10-24T20:39:59.852Z',
              comments: [],
              id: 'patch:npm:ms:20151024:0'
            },
            {
              urls: ['https://s3.amazonaws.com/snyk-rules-pre-repository/snapshots/master/patches/npm/ms/20151024/ms_20151024_1_0_48701f029417faf65e6f5e0b61a3cebe5436b07b_snyk.patch'],
              version: '<0.7.0 >=0.6.0',
              modificationTime: '2015-10-24T20:39:59.852Z',
              comments: [],
              id: 'patch:npm:ms:20151024:1'
            },
            {
              urls: ['https://s3.amazonaws.com/snyk-rules-pre-repository/snapshots/master/patches/npm/ms/20151024/ms_20151024_2_0_48701f029417faf65e6f5e0b61a3cebe5436b07b_snyk2.patch'],
              version: '<0.6.0 >0.3.0',
              modificationTime: '2015-10-24T20:39:59.852Z',
              comments: [],
              id: 'patch:npm:ms:20151024:2'
            },
            {
              urls: ['https://s3.amazonaws.com/snyk-rules-pre-repository/snapshots/master/patches/npm/ms/20151024/ms_20151024_3_0_48701f029417faf65e6f5e0b61a3cebe5436b07b_snyk3.patch'],
              version: '=0.3.0',
              modificationTime: '2015-10-24T20:39:59.852Z',
              comments: [],
              id: 'patch:npm:ms:20151024:3'
            },
            {
              urls: ['https://s3.amazonaws.com/snyk-rules-pre-repository/snapshots/master/patches/npm/ms/20151024/ms_20151024_4_0_48701f029417faf65e6f5e0b61a3cebe5436b07b_snyk4.patch'],
              version: '=0.2.0',
              modificationTime: '2015-10-24T20:39:59.852Z',
              comments: [],
              id: 'patch:npm:ms:20151024:4'
            },
            {
              urls: ['https://s3.amazonaws.com/snyk-rules-pre-repository/snapshots/master/patches/npm/ms/20151024/ms_20151024_5_0_48701f029417faf65e6f5e0b61a3cebe5436b07b_snyk5.patch'],
              version: '=0.1.0',
              modificationTime: '2015-10-24T20:39:59.852Z',
              comments: [],
              id: 'patch:npm:ms:20151024:5'
            }
          ],
          upgradePath: [false, 'ms@0.7.1']
        },
        {
          id: 'npm:ms:20170412',
          url: 'https://snyk.io/vuln/npm:ms:20170412',
          title: 'Regular Expression Denial of Service (ReDoS)',
          type: 'vuln',
          description:
            "## Overview\n[`ms`](https://www.npmjs.com/package/ms) is a tiny milisecond conversion utility.\nAffected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS) due to an incomplete fix for previously reported vulnerability [npm:ms:20151024](https://snyk.io/vuln/npm:ms:20151024). The fix limited the length of accepted input string to 10,000 characters, and turned to be insufficient making it possible to block the event loop for 0.3 seconds (on a typical laptop) with a specially crafted string passed to`ms()` function.\n\n*Proof of concept*\n```js\nms = require('ms');\nms('1'.repeat(9998) + 'Q') // Takes about ~0.3s\n```\n\n**Note:** Snyk's patchfor this vulnerability limits input length to 100 characters. This new limit was deemed to be a breaking change by the author.\nBased on user feedback, we believe the risk of breakage is _very_ low, while the value to your security is much greater, and therefore opted to still capture this change in a patch for earlier versions as well.  Whenever patching security issues, we always suggest to run tests on your code to validate that nothing has been broken.\n\nFor more information on `Regular Expression Denial of Service (ReDoS)` attacks, go to our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).\n\n## Disclosure Timeline\n- Feb 9th, 2017 - Reported the issue to package owner.\n- Feb 11th, 2017 - Issue acknowledged by package owner.\n- April 12th, 2017 - Fix PR opened by Snyk Security Team.\n- May 15th, 2017 - Vulnerability published.\n- May 16th, 2017- Issue fixed and version `2.0.0` released.\n- May 21th, 2017 - Patches released for versions `>=0.7.1, <=1.0.0`.\n\n## Remediation\nUpgrade `ms` to version 2.0.0 or higher.\n\n## References\n- [GitHub PR](https://github.com/zeit/ms/pull/89)\n- [GitHub Commit](https://github.com/zeit/ms/pull/89/commits/305f2ddcd4eff7cc7c518aca6bb2b2d2daad8fef)\n",
          from: ['ms@0.7.0'],
          package: 'ms',
          version: '0.7.0',
          severity: 'low',
          language: 'js',
          packageManager: 'npm',
          semver: {
            unaffected: '>=2.0.0',
            vulnerable: '<2.0.0'
          },
          publicationTime: '2017-05-15T06:02:45.497Z',
          disclosureTime: '2017-04-11T21:00:00.000Z',
          isUpgradable: true,
          isPatchable: false,
          identifiers: {
            CWE: ['CWE-400'],
            CVE: [],
            ALTERNATIVE: ['SNYK-JS-MS-10509']
          },
          credit: ['Snyk Security Research Team'],
          CVSSv3: 'CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:L',
          cvssScore: 3.7,
          patches: [
            {
              urls: ['https://s3.amazonaws.com/snyk-rules-pre-repository/snapshots/master/patches/npm/ms/20170412/ms_100.patch'],
              version: '=1.0.0',
              modificationTime: '2017-05-16T10:12:18.990Z',
              comments: [],
              id: 'patch:npm:ms:20170412:0'
            },
            {
              urls: ['https://s3.amazonaws.com/snyk-rules-pre-repository/snapshots/master/patches/npm/ms/20170412/ms_072-073.patch'],
              version: '=0.7.2 || =0.7.3',
              modificationTime: '2017-05-16T10:12:18.990Z',
              comments: [],
              id: 'patch:npm:ms:20170412:1'
            },
            {
              urls: ['https://s3.amazonaws.com/snyk-rules-pre-repository/snapshots/master/patches/npm/ms/20170412/ms_071.patch'],
              version: '=0.7.1',
              modificationTime: '2017-05-16T10:12:18.990Z',
              comments: [],
              id: 'patch:npm:ms:20170412:2'
            }
          ],
          upgradePath: [false, 'ms@2.0.0']
        }
      ],
      licenses: []
    },
    dependencyCount: 1,
    org: {
      name: 'atokeneduser',
      id: '4a18d42f-0706-4ad0-b127-24078731fbed'
    },
    licensesPolicy: null,
    packageManager: 'npm'
  };
  
  export default json;