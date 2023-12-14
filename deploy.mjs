import dotenv from 'dotenv';
import path from 'path';
import FtpDeploy from 'ftp-deploy';

dotenv.config({ path: './.env.local' });

async function main() {
  try {
    const outDir = path.join(process.cwd(), '/out');

    await new FtpDeploy().deploy({
      user: process.env.FTP_USER,
      password: process.env.FTP_PASS,
      host: process.env.FTP_HOST,
      port: process.env.FTP_PORT,
      localRoot: outDir,
      remoteRoot: "/home/grp11/public_html/build",
      include: ['*', '**/*'],
      exclude: [],
      deleteRemote: false,
      forcePasv: true,
    });

    console.log('Successfully deployed site');
    return 0;
  } catch (e) {
    console.error('An error occurred during deployment:', e);
    return 1;
  }
}

main().then((code) => process.exit(code));
