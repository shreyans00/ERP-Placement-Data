// Your XML-like structure
const { DOMParser } = require("xmldom");
const xmlString = `
<?xml
version='1.0' encoding='utf-8'?>
<rows>
    <page>1</page>
    <row id='0'>
        <cell><![CDATA[<a title='Aakash Educational Services Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","1624");'>Aakash Educational Services Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1624");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1624");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("1","1624","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1624","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1300000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1624","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[22-04-2024 11:02]]></cell>
        <cell><![CDATA[23-04-2024 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='1'>
        <cell><![CDATA[<a title='Aarvee Associates' href='javascript:void(0);' onclick='TPComView("2023-2024","466");'>Aarvee Associates</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","466");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","466");'></a>]]></cell>
        <cell><![CDATA[<a title='Post Graduation Trainee Engineer' href='javascript:void(0);' onclick='TPJNFView("2","466","2023-2024");'>Post Graduation Trainee Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","466","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[900000]]></cell>
        <cell><![CDATA[13 months]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","466","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 01:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='2'>
        <cell><![CDATA[<a title='Aarvee Associates' href='javascript:void(0);' onclick='TPComView("2023-2024","466");'>Aarvee Associates</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","466");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","466");'></a>]]></cell>
        <cell><![CDATA[<a title='Post Graduation Trainee Engineer' href='javascript:void(0);' onclick='TPJNFView("1","466","2023-2024");'>Post Graduation Trainee Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","466","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[900000]]></cell>
        <cell><![CDATA[13 months]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","466","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 01:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='3'>
        <cell><![CDATA[<a title='Aarvee Associates' href='javascript:void(0);' onclick='TPComView("2023-2024","466");'>Aarvee Associates</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","466");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","466");'></a>]]></cell>
        <cell><![CDATA[<a title='Post Graduation Trainee Engineer' href='javascript:void(0);' onclick='TPJNFView("3","466","2023-2024");'>Post Graduation Trainee Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","466","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[900000]]></cell>
        <cell><![CDATA[13 months]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","466","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 01:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='4'>
        <cell><![CDATA[<a title='AB InBev' href='javascript:void(0);' onclick='TPComView("2023-2024","449");'>AB InBev</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","449");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","449");'></a>]]></cell>
        <cell><![CDATA[<a title='Future leaders program' href='javascript:void(0);' onclick='TPJNFView("3","449","2023-2024");'>Future leaders program</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","449","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2350000]]></cell>
        <cell><![CDATA[Yes]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","449","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-10-2023 12:02]]></cell>
        <cell><![CDATA[10-10-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='5'>
        <cell><![CDATA[<a title='AB InBev' href='javascript:void(0);' onclick='TPComView("2023-2024","449");'>AB InBev</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","449");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","449");'></a>]]></cell>
        <cell><![CDATA[<a title='Global Management Trainee' href='javascript:void(0);' onclick='TPJNFView("2","449","2023-2024");'>Global Management Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","449","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2350000]]></cell>
        <cell><![CDATA[Yes]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","449","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-10-2023 12:06]]></cell>
        <cell><![CDATA[10-10-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='6'>
        <cell><![CDATA[<a title='Accenture Japan Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","445");'>Accenture Japan Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","445");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","445");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Scientist' href='javascript:void(0);' onclick='TPJNFView("4","445","2023-2024");'>Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","445","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[8683000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","445","4");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[01-10-2023 11:02]]></cell>
        <cell><![CDATA[03-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='7'>
        <cell><![CDATA[<a title='Accenture Japan Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","445");'>Accenture Japan Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","445");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","445");'></a>]]></cell>
        <cell><![CDATA[<a title='Strategy Consultant' href='javascript:void(0);' onclick='TPJNFView("3","445","2023-2024");'>Strategy Consultant</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","445","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[8683000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","445","3");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[01-10-2023 11:04]]></cell>
        <cell><![CDATA[03-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='8'>
        <cell><![CDATA[<a title='Adenza' href='javascript:void(0);' onclick='TPComView("2023-2024","743");'>Adenza</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","743");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","743");'></a>]]></cell>
        <cell><![CDATA[<a title='Financial Engineer, Capital Markets' href='javascript:void(0);' onclick='TPJNFView("1","743","2023-2024");'>Financial Engineer, Capital Markets</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","743","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2400000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","743","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[10-11-2023 01:15]]></cell>
        <cell><![CDATA[11-11-2023 11:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='9'>
        <cell><![CDATA[<a title='AGANITHA COGNITIVE SOLUTIONS PVT LTD' href='javascript:void(0);' onclick='TPComView("2023-2024","482");'>AGANITHA COGNITIVE SOLUTIONS PVT LTD</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","482");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","482");'></a>]]></cell>
        <cell><![CDATA[<a title='Web applications developer' href='javascript:void(0);' onclick='TPJNFView("4","482","2023-2024");'>Web applications developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","482","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","482","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='10'>
        <cell><![CDATA[<a title='AGANITHA COGNITIVE SOLUTIONS PVT LTD' href='javascript:void(0);' onclick='TPComView("2023-2024","482");'>AGANITHA COGNITIVE SOLUTIONS PVT LTD</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","482");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","482");'></a>]]></cell>
        <cell><![CDATA[<a title='DevOps and Cloud specialist' href='javascript:void(0);' onclick='TPJNFView("5","482","2023-2024");'>DevOps and Cloud specialist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","482","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","482","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='11'>
        <cell><![CDATA[<a title='AGANITHA COGNITIVE SOLUTIONS PVT LTD' href='javascript:void(0);' onclick='TPComView("2023-2024","482");'>AGANITHA COGNITIVE SOLUTIONS PVT LTD</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","482");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","482");'></a>]]></cell>
        <cell><![CDATA[<a title='Data engineer' href='javascript:void(0);' onclick='TPJNFView("3","482","2023-2024");'>Data engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","482","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","482","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='12'>
        <cell><![CDATA[<a title='AGANITHA COGNITIVE SOLUTIONS PVT LTD' href='javascript:void(0);' onclick='TPComView("2023-2024","482");'>AGANITHA COGNITIVE SOLUTIONS PVT LTD</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","482");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","482");'></a>]]></cell>
        <cell><![CDATA[<a title='Data scientist' href='javascript:void(0);' onclick='TPJNFView("2","482","2023-2024");'>Data scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","482","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","482","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='13'>
        <cell><![CDATA[<a title='Agentanalytics.ai' href='javascript:void(0);' onclick='TPComView("2023-2024","1133");'>Agentanalytics.ai</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1133");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1133");'></a>]]></cell>
        <cell><![CDATA[<a title='AI Researcher' href='javascript:void(0);' onclick='TPJNFView("2","1133","2023-2024");'>AI Researcher</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","1133","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[Yes]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1133","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[26-01-2024 08:00]]></cell>
        <cell><![CDATA[29-01-2024 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='14'>
        <cell><![CDATA[<a title='AIRBUS GROUP INDIA' href='javascript:void(0);' onclick='TPComView("2023-2024","275");'>AIRBUS GROUP INDIA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","275");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","275");'></a>]]></cell>
        <cell><![CDATA[<a title='Simulation Modelling Engineer' href='javascript:void(0);' onclick='TPJNFView("14","275","2023-2024");'>Simulation Modelling Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("14","275","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","275","14");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-10-2023 20:00]]></cell>
        <cell><![CDATA[06-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='15'>
        <cell><![CDATA[<a title='AIRBUS GROUP INDIA' href='javascript:void(0);' onclick='TPComView("2023-2024","275");'>AIRBUS GROUP INDIA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","275");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","275");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Engineer - Flight Operations Data Analyst' href='javascript:void(0);' onclick='TPJNFView("4","275","2023-2024");'>Associate Engineer - Flight Operations Data Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","275","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","275","4");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-10-2023 19:03]]></cell>
        <cell><![CDATA[06-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='16'>
        <cell><![CDATA[<a title='AIRBUS GROUP INDIA' href='javascript:void(0);' onclick='TPComView("2023-2024","275");'>AIRBUS GROUP INDIA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","275");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","275");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Simulation Platforms Engineer' href='javascript:void(0);' onclick='TPJNFView("11","275","2023-2024");'>Associate Simulation Platforms Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("11","275","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","275","11");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-10-2023 19:01]]></cell>
        <cell><![CDATA[06-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='17'>
        <cell><![CDATA[<a title='AIRBUS GROUP INDIA' href='javascript:void(0);' onclick='TPComView("2023-2024","275");'>AIRBUS GROUP INDIA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","275");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","275");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Engineer, Navigation Systems' href='javascript:void(0);' onclick='TPJNFView("9","275","2023-2024");'>Associate Engineer, Navigation Systems</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("9","275","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","275","9");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-10-2023 19:02]]></cell>
        <cell><![CDATA[06-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='18'>
        <cell><![CDATA[<a title='AIRBUS GROUP INDIA' href='javascript:void(0);' onclick='TPComView("2023-2024","275");'>AIRBUS GROUP INDIA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","275");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","275");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Engineer: System Installation' href='javascript:void(0);' onclick='TPJNFView("5","275","2023-2024");'>Associate Engineer: System Installation</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","275","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","275","5");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-10-2023 20:00]]></cell>
        <cell><![CDATA[06-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='19'>
        <cell><![CDATA[<a title='AIRBUS GROUP INDIA' href='javascript:void(0);' onclick='TPComView("2023-2024","275");'>AIRBUS GROUP INDIA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","275");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","275");'></a>]]></cell>
        <cell><![CDATA[<a title='Multi System Physical Architecture Engineer - Associate' href='javascript:void(0);' onclick='TPJNFView("8","275","2023-2024");'>Multi System Physical Architecture Engineer - Associate</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("8","275","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","275","8");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-10-2023 19:04]]></cell>
        <cell><![CDATA[06-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='20'>
        <cell><![CDATA[<a title='AIRBUS GROUP INDIA' href='javascript:void(0);' onclick='TPComView("2023-2024","275");'>AIRBUS GROUP INDIA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","275");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","275");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Electrical System Engineer' href='javascript:void(0);' onclick='TPJNFView("7","275","2023-2024");'>Associate Electrical System Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("7","275","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","275","7");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-10-2023 20:00]]></cell>
        <cell><![CDATA[06-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='21'>
        <cell><![CDATA[<a title='AirLiquide Global E&C Solutions India Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","937");'>AirLiquide Global E&C Solutions India Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","937");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","937");'></a>]]></cell>
        <cell><![CDATA[<a title='Trainee Engineer' href='javascript:void(0);' onclick='TPJNFView("1","937","2023-2024");'>Trainee Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","937","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[850000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","937","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[30-01-2024 17:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='22'>
        <cell><![CDATA[<a title='ANAND GROUP' href='javascript:void(0);' onclick='TPComView("2023-2024","864");'>ANAND GROUP</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","864");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","864");'></a>]]></cell>
        <cell><![CDATA[<a title='GET' href='javascript:void(0);' onclick='TPJNFView("2","864","2023-2024");'>GET</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","864","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[800000]]></cell>
        <cell><![CDATA[2 YEARS LOCKIN PERIOD]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","864","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[15-11-2023 23:40]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='23'>
        <cell><![CDATA[<a title='Angel One' href='javascript:void(0);' onclick='TPComView("2023-2024","1135");'>Angel One</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1135");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1135");'></a>]]></cell>
        <cell><![CDATA[<a title='SDE1' href='javascript:void(0);' onclick='TPJNFView("1","1135","2023-2024");'>SDE1</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1135","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1135","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[21-01-2024 15:20]]></cell>
        <cell><![CDATA[22-01-2024 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='24'>
        <cell><![CDATA[<a title='Antino Labs' href='javascript:void(0);' onclick='TPComView("2023-2024","453");'>Antino Labs</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","453");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","453");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Software Developer' href='javascript:void(0);' onclick='TPJNFView("1","453","2023-2024");'>Associate Software Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","453","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[800000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","453","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 14:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='25'>
        <cell><![CDATA[<a title='Antino Labs' href='javascript:void(0);' onclick='TPComView("2023-2024","453");'>Antino Labs</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","453");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","453");'></a>]]></cell>
        <cell><![CDATA[<a title='Management Trainee' href='javascript:void(0);' onclick='TPJNFView("2","453","2023-2024");'>Management Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","453","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[800000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","453","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 14:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='26'>
        <cell><![CDATA[<a title='AppOrchid' href='javascript:void(0);' onclick='TPComView("2023-2024","821");'>AppOrchid</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","821");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","821");'></a>]]></cell>
        <cell><![CDATA[<a title='Junior Data Scientist' href='javascript:void(0);' onclick='TPJNFView("2","821","2023-2024");'>Junior Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","821","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1300000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","821","2");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='27'>
        <cell><![CDATA[<a title='AppOrchid' href='javascript:void(0);' onclick='TPComView("2023-2024","821");'>AppOrchid</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","821");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","821");'></a>]]></cell>
        <cell><![CDATA[<a title='Lead Data Scientist' href='javascript:void(0);' onclick='TPJNFView("1","821","2023-2024");'>Lead Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","821","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","821","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='28'>
        <cell><![CDATA[<a title='ARC Document Solutions' href='javascript:void(0);' onclick='TPComView("2023-2024","524");'>ARC Document Solutions</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","524");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","524");'></a>]]></cell>
        <cell><![CDATA[<a title='Database Developer (Software Engineer)' href='javascript:void(0);' onclick='TPJNFView("2","524","2023-2024");'>Database Developer (Software Engineer)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","524","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[2 years]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","524","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='29'>
        <cell><![CDATA[<a title='ARC Document Solutions' href='javascript:void(0);' onclick='TPComView("2023-2024","524");'>ARC Document Solutions</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","524");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","524");'></a>]]></cell>
        <cell><![CDATA[<a title='Database Admin (Software Engineer)' href='javascript:void(0);' onclick='TPJNFView("3","524","2023-2024");'>Database Admin (Software Engineer)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","524","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[2 Years]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","524","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='30'>
        <cell><![CDATA[<a title='ArcelorMittal Nippon Steel India' href='javascript:void(0);' onclick='TPComView("2023-2024","708");'>ArcelorMittal Nippon Steel India</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","708");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","708");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Engineer Trainee' href='javascript:void(0);' onclick='TPJNFView("1","708","2023-2024");'>Graduate Engineer Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","708","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1550000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","708","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 08:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='31'>
        <cell><![CDATA[<a title='asadel tech' href='javascript:void(0);' onclick='TPComView("2023-2024","684");'>asadel tech</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","684");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","684");'></a>]]></cell>
        <cell><![CDATA[<a title='Full stack developer' href='javascript:void(0);' onclick='TPJNFView("2","684","2023-2024");'>Full stack developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","684","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","684","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='32'>
        <cell><![CDATA[<a title='Asper.ai ( A Fractal Company)' href='javascript:void(0);' onclick='TPComView("2023-2024","972");'>Asper.ai ( A Fractal Company)</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","972");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","972");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Scientist' href='javascript:void(0);' onclick='TPJNFView("3","972","2023-2024");'>Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","972","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","972","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[29-11-2023 15:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='33'>
        <cell><![CDATA[<a title='Aureustech Systems' href='javascript:void(0);' onclick='TPComView("2023-2024","559");'>Aureustech Systems</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","559");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","559");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Software Engineer (Fullstack)' href='javascript:void(0);' onclick='TPJNFView("3","559","2023-2024");'>Associate Software Engineer (Fullstack)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","559","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","559","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 14:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='34'>
        <cell><![CDATA[<a title='Aureustech Systems' href='javascript:void(0);' onclick='TPComView("2023-2024","559");'>Aureustech Systems</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","559");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","559");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Software Engineer' href='javascript:void(0);' onclick='TPJNFView("2","559","2023-2024");'>Associate Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","559","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","559","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 14:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='35'>
        <cell><![CDATA[<a title='Aureustech Systems' href='javascript:void(0);' onclick='TPComView("2023-2024","559");'>Aureustech Systems</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","559");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","559");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Data Engineer' href='javascript:void(0);' onclick='TPJNFView("1","559","2023-2024");'>Associate Data Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","559","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","559","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 14:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='36'>
        <cell><![CDATA[<a title='Aureustech Systems' href='javascript:void(0);' onclick='TPComView("2023-2024","559");'>Aureustech Systems</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","559");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","559");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Software Engineer (Backend Developer)' href='javascript:void(0);' onclick='TPJNFView("4","559","2023-2024");'>Associate Software Engineer (Backend Developer)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","559","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","559","4");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 14:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='37'>
        <cell><![CDATA[<a title='AXIS BANK' href='javascript:void(0);' onclick='TPComView("2023-2024","414");'>AXIS BANK</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","414");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","414");'></a>]]></cell>
        <cell><![CDATA[<a title='DBAT: Performance Marketing Manager' href='javascript:void(0);' onclick='TPJNFView("4","414","2023-2024");'>DBAT: Performance Marketing Manager</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","414","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1443306]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","414","4");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[21-11-2023 06:00]]></cell>
        <cell><![CDATA[21-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='38'>
        <cell><![CDATA[<a title='AXIS MY INDIA' href='javascript:void(0);' onclick='TPComView("2023-2024","896");'>AXIS MY INDIA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","896");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","896");'></a>]]></cell>
        <cell><![CDATA[<a title='Executive  Projects' href='javascript:void(0);' onclick='TPJNFView("1","896","2023-2024");'>Executive  Projects</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","896","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[807230]]></cell>
        <cell><![CDATA[200000 if left before 2 yrs.]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","896","1");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[05-12-2023 19:00]]></cell>
        <cell><![CDATA[06-12-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='39'>
        <cell><![CDATA[<a title='BANK OF AMERICA' href='javascript:void(0);' onclick='TPComView("2023-2024","261");'>BANK OF AMERICA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","261");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","261");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Research' href='javascript:void(0);' onclick='TPJNFView("4","261","2023-2024");'>Data Research</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","261","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1550000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","261","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[25-11-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='40'>
        <cell><![CDATA[<a title='Bidgely Technologies' href='javascript:void(0);' onclick='TPComView("2023-2024","28");'>Bidgely Technologies</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","28");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","28");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("3","28","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","28","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2286000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","28","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[30-10-2023 22:30]]></cell>
        <cell><![CDATA[01-11-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='41'>
        <cell><![CDATA[<a title='Blitz' href='javascript:void(0);' onclick='TPComView("2023-2024","955");'>Blitz</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","955");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","955");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Development Engineer - 1' href='javascript:void(0);' onclick='TPJNFView("1","955","2023-2024");'>Software Development Engineer - 1</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","955","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2595680]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","955","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 05:00]]></cell>
        <cell><![CDATA[03-12-2023 23:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='42'>
        <cell><![CDATA[<a title='Blitz' href='javascript:void(0);' onclick='TPComView("2023-2024","955");'>Blitz</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","955");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","955");'></a>]]></cell>
        <cell><![CDATA[<a title='Business Analyst' href='javascript:void(0);' onclick='TPJNFView("2","955","2023-2024");'>Business Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","955","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2000680]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","955","2");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[02-12-2023 22:00]]></cell>
        <cell><![CDATA[03-12-2023 23:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='43'>
        <cell><![CDATA[<a title='BPS TECH' href='javascript:void(0);' onclick='TPComView("2023-2024","774");'>BPS TECH</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","774");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","774");'></a>]]></cell>
        <cell><![CDATA[<a title='Derivative Trader' href='javascript:void(0);' onclick='TPJNFView("1","774","2023-2024");'>Derivative Trader</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","774","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","774","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[09-12-2023 15:00]]></cell>
        <cell><![CDATA[10-12-2023 06:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='44'>
        <cell><![CDATA[<a title='BPS TECH' href='javascript:void(0);' onclick='TPComView("2023-2024","774");'>BPS TECH</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","774");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","774");'></a>]]></cell>
        <cell><![CDATA[<a title='Sr. Derivative Trader' href='javascript:void(0);' onclick='TPJNFView("3","774","2023-2024");'>Sr. Derivative Trader</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","774","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","774","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[09-12-2023 15:00]]></cell>
        <cell><![CDATA[10-12-2023 06:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='45'>
        <cell><![CDATA[<a title='BPS TECH' href='javascript:void(0);' onclick='TPComView("2023-2024","774");'>BPS TECH</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","774");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","774");'></a>]]></cell>
        <cell><![CDATA[<a title='Market Analyst' href='javascript:void(0);' onclick='TPJNFView("2","774","2023-2024");'>Market Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","774","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","774","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[09-12-2023 15:00]]></cell>
        <cell><![CDATA[10-12-2023 06:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='46'>
        <cell><![CDATA[<a title='Brane Enterprises- NSL Hub' href='javascript:void(0);' onclick='TPComView("2023-2024","526");'>Brane Enterprises- NSL Hub</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","526");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","526");'></a>]]></cell>
        <cell><![CDATA[<a title='Associated Solution Leader Trainee  PaaS' href='javascript:void(0);' onclick='TPJNFView("1","526","2023-2024");'>Associated Solution Leader Trainee  PaaS</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","526","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2000000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","526","1");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 16:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='47'>
        <cell><![CDATA[<a title='Brane Enterprises- NSL Hub' href='javascript:void(0);' onclick='TPComView("2023-2024","526");'>Brane Enterprises- NSL Hub</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","526");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","526");'></a>]]></cell>
        <cell><![CDATA[<a title='DATA SCIENTIST' href='javascript:void(0);' onclick='TPJNFView("5","526","2023-2024");'>DATA SCIENTIST</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","526","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","526","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 05:00]]></cell>
        <cell><![CDATA[03-12-2023 23:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='48'>
        <cell><![CDATA[<a title='Brane Enterprises- NSL Hub' href='javascript:void(0);' onclick='TPComView("2023-2024","526");'>Brane Enterprises- NSL Hub</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","526");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","526");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Solution Leader - Blockchain Syntactic' href='javascript:void(0);' onclick='TPJNFView("2","526","2023-2024");'>Associate Solution Leader - Blockchain Syntactic</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","526","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2000000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","526","2");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 16:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='49'>
        <cell><![CDATA[<a title='Brane Enterprises- NSL Hub' href='javascript:void(0);' onclick='TPComView("2023-2024","526");'>Brane Enterprises- NSL Hub</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","526");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","526");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Solution Leader - Blockchain Semantic' href='javascript:void(0);' onclick='TPJNFView("3","526","2023-2024");'>Associate Solution Leader - Blockchain Semantic</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","526","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2000000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","526","3");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 16:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='50'>
        <cell><![CDATA[<a title='Brane Enterprises- NSL Hub' href='javascript:void(0);' onclick='TPComView("2023-2024","526");'>Brane Enterprises- NSL Hub</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","526");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","526");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Solution Leader - TF Software Developer' href='javascript:void(0);' onclick='TPJNFView("4","526","2023-2024");'>Associate Solution Leader - TF Software Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","526","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2000000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","526","4");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 16:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='51'>
        <cell><![CDATA[<a title='Brane Enterprises- NSL Hub' href='javascript:void(0);' onclick='TPComView("2023-2024","526");'>Brane Enterprises- NSL Hub</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","526");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","526");'></a>]]></cell>
        <cell><![CDATA[<a title='2024 Associated Solution Leader Trainee  PaaS' href='javascript:void(0);' onclick='TPJNFView("6","526","2023-2024");'>2024 Associated Solution Leader Trainee  PaaS</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","526","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2000000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","526","6");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[19-03-2024 11:15]]></cell>
        <cell><![CDATA[19-03-2024 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='52'>
        <cell><![CDATA[<a title='Broadridge Trading and Connectivity Solutions' href='javascript:void(0);' onclick='TPComView("2023-2024","198");'>Broadridge Trading and Connectivity Solutions</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","198");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","198");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Developer' href='javascript:void(0);' onclick='TPJNFView("1","198","2023-2024");'>Associate Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","198","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1980000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","198","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 21:00]]></cell>
        <cell><![CDATA[29-11-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='53'>
        <cell><![CDATA[<a title='Cambridge Technology' href='javascript:void(0);' onclick='TPComView("2023-2024","1612");'>Cambridge Technology</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1612");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1612");'></a>]]></cell>
        <cell><![CDATA[<a title='.Net' href='javascript:void(0);' onclick='TPJNFView("6","1612","2023-2024");'>.Net</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","1612","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1612","6");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[25-04-2024 11:20]]></cell>
        <cell><![CDATA[26-04-2024 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='54'>
        <cell><![CDATA[<a title='Cambridge Technology' href='javascript:void(0);' onclick='TPComView("2023-2024","1612");'>Cambridge Technology</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1612");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1612");'></a>]]></cell>
        <cell><![CDATA[<a title='IMS' href='javascript:void(0);' onclick='TPJNFView("1","1612","2023-2024");'>IMS</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1612","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1612","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[25-04-2024 11:20]]></cell>
        <cell><![CDATA[26-04-2024 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='55'>
        <cell><![CDATA[<a title='Cambridge Technology' href='javascript:void(0);' onclick='TPComView("2023-2024","1612");'>Cambridge Technology</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1612");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1612");'></a>]]></cell>
        <cell><![CDATA[<a title='L1 - Management Trainee' href='javascript:void(0);' onclick='TPJNFView("2","1612","2023-2024");'>L1 - Management Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","1612","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1612","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[25-04-2024 11:20]]></cell>
        <cell><![CDATA[26-04-2024 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='56'>
        <cell><![CDATA[<a title='Cambridge Technology' href='javascript:void(0);' onclick='TPComView("2023-2024","1612");'>Cambridge Technology</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1612");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1612");'></a>]]></cell>
        <cell><![CDATA[<a title='SQL' href='javascript:void(0);' onclick='TPJNFView("5","1612","2023-2024");'>SQL</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","1612","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1612","5");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[25-04-2024 11:20]]></cell>
        <cell><![CDATA[26-04-2024 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='57'>
        <cell><![CDATA[<a title='Cambridge Technology' href='javascript:void(0);' onclick='TPComView("2023-2024","1612");'>Cambridge Technology</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1612");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1612");'></a>]]></cell>
        <cell><![CDATA[<a title='Qlik' href='javascript:void(0);' onclick='TPJNFView("3","1612","2023-2024");'>Qlik</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","1612","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1612","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[25-04-2024 11:20]]></cell>
        <cell><![CDATA[26-04-2024 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='58'>
        <cell><![CDATA[<a title='Cambridge Technology' href='javascript:void(0);' onclick='TPComView("2023-2024","1612");'>Cambridge Technology</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1612");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1612");'></a>]]></cell>
        <cell><![CDATA[<a title='QC Automation' href='javascript:void(0);' onclick='TPJNFView("4","1612","2023-2024");'>QC Automation</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","1612","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1612","4");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[25-04-2024 11:20]]></cell>
        <cell><![CDATA[26-04-2024 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='59'>
        <cell><![CDATA[<a title='CARGILL' href='javascript:void(0);' onclick='TPComView("2023-2024","487");'>CARGILL</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","487");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","487");'></a>]]></cell>
        <cell><![CDATA[<a title='Agriculture supply chain Associate Data Analyst' href='javascript:void(0);' onclick='TPJNFView("2","487","2023-2024");'>Agriculture supply chain Associate Data Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","487","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1925623]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","487","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 21:00]]></cell>
        <cell><![CDATA[29-11-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='60'>
        <cell><![CDATA[<a title='CARGILL' href='javascript:void(0);' onclick='TPComView("2023-2024","487");'>CARGILL</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","487");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","487");'></a>]]></cell>
        <cell><![CDATA[<a title='Agriculture supply chain advanced analytics associate scientist' href='javascript:void(0);' onclick='TPJNFView("4","487","2023-2024");'>Agriculture supply chain advanced analytics associate scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","487","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1925623]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","487","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 21:00]]></cell>
        <cell><![CDATA[29-11-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='61'>
        <cell><![CDATA[<a title='CARGILL' href='javascript:void(0);' onclick='TPComView("2023-2024","487");'>CARGILL</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","487");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","487");'></a>]]></cell>
        <cell><![CDATA[<a title='Agriculture supply chain advanced analytics scientist' href='javascript:void(0);' onclick='TPJNFView("5","487","2023-2024");'>Agriculture supply chain advanced analytics scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","487","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2303338]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","487","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 21:00]]></cell>
        <cell><![CDATA[29-11-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='62'>
        <cell><![CDATA[<a title='CENIZAS LABS' href='javascript:void(0);' onclick='TPComView("2023-2024","1352");'>CENIZAS LABS</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1352");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1352");'></a>]]></cell>
        <cell><![CDATA[<a title='ELECTRICAL ENGINEER POSITION' href='javascript:void(0);' onclick='TPJNFView("1","1352","2023-2024");'>ELECTRICAL ENGINEER POSITION</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1352","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1352","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-03-2024 16:00]]></cell>
        <cell><![CDATA[08-03-2024 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='63'>
        <cell><![CDATA[<a title='centific' href='javascript:void(0);' onclick='TPComView("2023-2024","1125");'>centific</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1125");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1125");'></a>]]></cell>
        <cell><![CDATA[<a title='Software engineer' href='javascript:void(0);' onclick='TPJNFView("1","1125","2023-2024");'>Software engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1125","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1125","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[17-01-2024 19:00]]></cell>
        <cell><![CDATA[18-01-2024 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='64'>
        <cell><![CDATA[<a title='centific' href='javascript:void(0);' onclick='TPComView("2023-2024","1125");'>centific</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1125");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1125");'></a>]]></cell>
        <cell><![CDATA[<a title='Junior AI Engineer' href='javascript:void(0);' onclick='TPJNFView("2","1125","2023-2024");'>Junior AI Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","1125","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1125","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[17-01-2024 19:00]]></cell>
        <cell><![CDATA[18-01-2024 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='65'>
        <cell><![CDATA[<a title='Centre for Development of Advanced Computing' href='javascript:void(0);' onclick='TPComView("2023-2024","685");'>Centre for Development of Advanced Computing</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","685");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","685");'></a>]]></cell>
        <cell><![CDATA[<a title='Knowledge Associates' href='javascript:void(0);' onclick='TPJNFView("1","685","2023-2024");'>Knowledge Associates</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","685","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[8.49]]></cell>
        <cell><![CDATA[3 years (Renewable based on performance/need)]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","685","1");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='66'>
        <cell><![CDATA[<a title='ChangeCX India Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","669");'>ChangeCX India Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","669");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","669");'></a>]]></cell>
        <cell><![CDATA[<a title='Technology Trainee' href='javascript:void(0);' onclick='TPJNFView("1","669","2023-2024");'>Technology Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","669","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","669","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 14:00]]></cell>
        <cell><![CDATA[04-12-2023 21:30]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='67'>
        <cell><![CDATA[<a title='Cobblestone Energy' href='javascript:void(0);' onclick='TPComView("2023-2024","730");'>Cobblestone Energy</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","730");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","730");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("3","730","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","730","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[60000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","730","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-10-2023 19:30]]></cell>
        <cell><![CDATA[30-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='68'>
        <cell><![CDATA[<a title='Cobblestone Energy' href='javascript:void(0);' onclick='TPComView("2023-2024","730");'>Cobblestone Energy</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","730");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","730");'></a>]]></cell>
        <cell><![CDATA[<a title='Junior Trader' href='javascript:void(0);' onclick='TPJNFView("1","730","2023-2024");'>Junior Trader</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","730","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[60000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","730","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-10-2023 19:30]]></cell>
        <cell><![CDATA[30-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='69'>
        <cell><![CDATA[<a title='Cobblestone Energy' href='javascript:void(0);' onclick='TPComView("2023-2024","730");'>Cobblestone Energy</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","730");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","730");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Software Engineer' href='javascript:void(0);' onclick='TPJNFView("2","730","2023-2024");'>Graduate Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","730","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[55000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","730","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-10-2023 19:30]]></cell>
        <cell><![CDATA[30-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='70'>
        <cell><![CDATA[<a title='Competishun' href='javascript:void(0);' onclick='TPComView("2023-2024","764");'>Competishun</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","764");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","764");'></a>]]></cell>
        <cell><![CDATA[<a title='Trainee Faculty' href='javascript:void(0);' onclick='TPJNFView("8","764","2023-2024");'>Trainee Faculty</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("8","764","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[900000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","764","8");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-12-2023 13:00]]></cell>
        <cell><![CDATA[07-12-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='71'>
        <cell><![CDATA[<a title='Crescent Foundry' href='javascript:void(0);' onclick='TPComView("2023-2024","967");'>Crescent Foundry</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","967");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","967");'></a>]]></cell>
        <cell><![CDATA[<a title='Manager -Strategy' href='javascript:void(0);' onclick='TPJNFView("1","967","2023-2024");'>Manager -Strategy</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","967","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1400000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","967","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[04-12-2023 14:00]]></cell>
        <cell><![CDATA[05-12-2023 17:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='72'>
        <cell><![CDATA[<a title='Cyfuture' href='javascript:void(0);' onclick='TPComView("2023-2024","443");'>Cyfuture</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","443");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","443");'></a>]]></cell>
        <cell><![CDATA[<a title='New Pre-Sales Engineer' href='javascript:void(0);' onclick='TPJNFView("3","443","2023-2024");'>New Pre-Sales Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","443","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","443","3");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 14:03]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='73'>
        <cell><![CDATA[<a title='Cyfuture' href='javascript:void(0);' onclick='TPComView("2023-2024","443");'>Cyfuture</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","443");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","443");'></a>]]></cell>
        <cell><![CDATA[<a title='Cloud Support Engineer' href='javascript:void(0);' onclick='TPJNFView("2","443","2023-2024");'>Cloud Support Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","443","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","443","2");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='74'>
        <cell><![CDATA[<a title='Dashtoon' href='javascript:void(0);' onclick='TPComView("2023-2024","796");'>Dashtoon</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","796");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","796");'></a>]]></cell>
        <cell><![CDATA[<a title='Product Designer' href='javascript:void(0);' onclick='TPJNFView("5","796","2023-2024");'>Product Designer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","796","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","796","5");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[25-11-2023 16:00]]></cell>
        <cell><![CDATA[27-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='75'>
        <cell><![CDATA[<a title='Dashtoon' href='javascript:void(0);' onclick='TPComView("2023-2024","796");'>Dashtoon</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","796");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","796");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Product Manager' href='javascript:void(0);' onclick='TPJNFView("4","796","2023-2024");'>Associate Product Manager</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","796","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1400000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","796","4");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[25-11-2023 16:00]]></cell>
        <cell><![CDATA[27-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='76'>
        <cell><![CDATA[<a title='Dataeaze Systems PVT LTD' href='javascript:void(0);' onclick='TPComView("2023-2024","366");'>Dataeaze Systems PVT LTD</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","366");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","366");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Scientist' href='javascript:void(0);' onclick='TPJNFView("1","366","2023-2024");'>Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","366","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1400000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","366","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[04-12-2023 21:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='77'>
        <cell><![CDATA[<a title='Dataeaze Systems PVT LTD' href='javascript:void(0);' onclick='TPComView("2023-2024","366");'>Dataeaze Systems PVT LTD</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","366");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","366");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Engineer' href='javascript:void(0);' onclick='TPJNFView("2","366","2023-2024");'>Data Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","366","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1400000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","366","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[04-12-2023 21:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='78'>
        <cell><![CDATA[<a title='Delta Electronics India Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","766");'>Delta Electronics India Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","766");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","766");'></a>]]></cell>
        <cell><![CDATA[<a title='Power Electronics and Control' href='javascript:void(0);' onclick='TPJNFView("1","766","2023-2024");'>Power Electronics and Control</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","766","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[10,50,000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","766","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-12-2023 20:00]]></cell>
        <cell><![CDATA[07-12-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='79'>
        <cell><![CDATA[<a title='Delta Electronics India Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","766");'>Delta Electronics India Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","766");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","766");'></a>]]></cell>
        <cell><![CDATA[<a title='Firmware and Hardware Design' href='javascript:void(0);' onclick='TPJNFView("2","766","2023-2024");'>Firmware and Hardware Design</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","766","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[10,50,000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","766","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-12-2023 20:00]]></cell>
        <cell><![CDATA[07-12-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='80'>
        <cell><![CDATA[<a title='DENSO' href='javascript:void(0);' onclick='TPComView("2023-2024","728");'>DENSO</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","728");'></a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","728");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Next Generation automotive SoC Research and Development' href='javascript:void(0);' onclick='TPJNFView("6","728","2023-2024");'>Next Generation automotive SoC Research and Development</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","728","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[6854615]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","728","6");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[14-11-2023 00:30]]></cell>
        <cell><![CDATA[15-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='81'>
        <cell><![CDATA[<a title='DENSO' href='javascript:void(0);' onclick='TPComView("2023-2024","728");'>DENSO</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","728");'></a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","728");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Research and development of robot intelligence technology' href='javascript:void(0);' onclick='TPJNFView("4","728","2023-2024");'>Research and development of robot intelligence technology</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","728","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[6854615]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","728","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[14-11-2023 00:30]]></cell>
        <cell><![CDATA[15-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='82'>
        <cell><![CDATA[<a title='DENSO' href='javascript:void(0);' onclick='TPComView("2023-2024","728");'>DENSO</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","728");'></a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","728");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Development of Information Traceability' href='javascript:void(0);' onclick='TPJNFView("2","728","2023-2024");'>Development of Information Traceability</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","728","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[6854615]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","728","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[14-11-2023 00:30]]></cell>
        <cell><![CDATA[15-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='83'>
        <cell><![CDATA[<a title='DENSO' href='javascript:void(0);' onclick='TPComView("2023-2024","728");'>DENSO</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","728");'></a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","728");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer (Cloud, IoT)' href='javascript:void(0);' onclick='TPJNFView("1","728","2023-2024");'>Software Engineer (Cloud, IoT)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","728","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[6854615]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","728","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[14-11-2023 00:30]]></cell>
        <cell><![CDATA[15-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='84'>
        <cell><![CDATA[<a title='DENSO' href='javascript:void(0);' onclick='TPComView("2023-2024","728");'>DENSO</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","728");'></a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","728");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Research and Development for Computer vision / Image Synthesis' href='javascript:void(0);' onclick='TPJNFView("5","728","2023-2024");'>Research and Development for Computer vision / Image Synthesis</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","728","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[6854615]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","728","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[14-11-2023 00:30]]></cell>
        <cell><![CDATA[15-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='85'>
        <cell><![CDATA[<a title='Deqode' href='javascript:void(0);' onclick='TPComView("2023-2024","1608");'>Deqode</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1608");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1608");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='RnD Engineer' href='javascript:void(0);' onclick='TPJNFView("1","1608","2023-2024");'>RnD Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1608","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[18 Months]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1608","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[16-04-2024 19:00]]></cell>
        <cell><![CDATA[18-04-2024 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='86'>
        <cell><![CDATA[<a title='Digital Alpha Platforms' href='javascript:void(0);' onclick='TPComView("2023-2024","1206");'>Digital Alpha Platforms</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1206");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1206");'></a>]]></cell>
        <cell><![CDATA[<a title='Junior Front-End Developer' href='javascript:void(0);' onclick='TPJNFView("1","1206","2023-2024");'>Junior Front-End Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1206","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1206","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[15-02-2024 10:00]]></cell>
        <cell><![CDATA[16-02-2024 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='87'>
        <cell><![CDATA[<a title='Dolat Capital' href='javascript:void(0);' onclick='TPComView("2023-2024","388");'>Dolat Capital</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","388");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","388");'></a>]]></cell>
        <cell><![CDATA[<a title='Quantitative Trader' href='javascript:void(0);' onclick='TPJNFView("3","388","2023-2024");'>Quantitative Trader</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","388","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[Service Commitment for 6 Months]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","388","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[25-10-2023 22:45]]></cell>
        <cell><![CDATA[27-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='88'>
        <cell><![CDATA[<a title='DriveX Mobility Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","1546");'>DriveX Mobility Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1546");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1546");'></a>]]></cell>
        <cell><![CDATA[<a title='Planning Analyst' href='javascript:void(0);' onclick='TPJNFView("1","1546","2023-2024");'>Planning Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1546","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[800000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1546","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[12-04-2024 20:00]]></cell>
        <cell><![CDATA[15-04-2024 10:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='89'>
        <cell><![CDATA[<a title='DTDC Express Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","265");'>DTDC Express Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","265");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","265");'></a>]]></cell>
        <cell><![CDATA[<a title='Management Trainee - D3L' href='javascript:void(0);' onclick='TPJNFView("1","265","2023-2024");'>Management Trainee - D3L</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","265","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2200000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","265","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[15-01-2024 19:00]]></cell>
        <cell><![CDATA[17-01-2024 23:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='90'>
        <cell><![CDATA[<a title='DTICI' href='javascript:void(0);' onclick='TPComView("2023-2024","716");'>DTICI</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","716");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","716");'></a>]]></cell>
        <cell><![CDATA[<a title='GET / PGET' href='javascript:void(0);' onclick='TPJNFView("1","716","2023-2024");'>GET / PGET</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","716","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1400000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","716","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 09:00]]></cell>
        <cell><![CDATA[29-11-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='91'>
        <cell><![CDATA[<a title='EagleView Technologies' href='javascript:void(0);' onclick='TPComView("2023-2024","957");'>EagleView Technologies</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","957");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","957");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer - I' href='javascript:void(0);' onclick='TPJNFView("1","957","2023-2024");'>Software Engineer - I</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","957","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1384000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","957","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='92'>
        <cell><![CDATA[<a title='Edgeverve Systems Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","938");'>Edgeverve Systems Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","938");'></a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","938");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Member of Technical Staff' href='javascript:void(0);' onclick='TPJNFView("1","938","2023-2024");'>Member of Technical Staff</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","938","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1700000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","938","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[29-11-2023 15:00]]></cell>
        <cell><![CDATA[30-11-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='93'>
        <cell><![CDATA[<a title='ELEATION' href='javascript:void(0);' onclick='TPComView("2023-2024","891");'>ELEATION</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","891");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","891");'></a>]]></cell>
        <cell><![CDATA[<a title='CAE Project Engineer' href='javascript:void(0);' onclick='TPJNFView("1","891","2023-2024");'>CAE Project Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","891","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[16.2]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","891","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[04-12-2023 14:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='94'>
        <cell><![CDATA[<a title='ENERZINX INDIA PRIVATE LIMITED' href='javascript:void(0);' onclick='TPComView("2023-2024","814");'>ENERZINX INDIA PRIVATE LIMITED</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","814");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","814");'></a>]]></cell>
        <cell><![CDATA[<a title='Application Engineer - I' href='javascript:void(0);' onclick='TPJNFView("1","814","2023-2024");'>Application Engineer - I</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","814","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1650000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","814","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 14:00]]></cell>
        <cell><![CDATA[29-11-2023 08:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='95'>
        <cell><![CDATA[<a title='Engineers India ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","1008");'>Engineers India ltd.</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1008");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1008");'></a>]]></cell>
        <cell><![CDATA[<a title='Attached' href='javascript:void(0);' onclick='TPJNFView("1","1008","2023-2024");'>Attached</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1008","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[0000]]></cell>
        <cell><![CDATA[Attached]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1008","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
        <cell><![CDATA[15-12-2023 16:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='96'>
        <cell><![CDATA[<a title='Exponent Energy Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","1345");'>Exponent Energy Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1345");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1345");'></a>]]></cell>
        <cell><![CDATA[<a title='Battery Design Engineer' href='javascript:void(0);' onclick='TPJNFView("2","1345","2023-2024");'>Battery Design Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","1345","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1345","2");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-03-2024 17:00]]></cell>
        <cell><![CDATA[07-03-2024 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='97'>
        <cell><![CDATA[<a title='Express Analytics' href='javascript:void(0);' onclick='TPComView("2023-2024","454");'>Express Analytics</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","454");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","454");'></a>]]></cell>
        <cell><![CDATA[<a title='Job Title: Junior Data ScientistJob Type: Full Time (Freshers)Job Location: Pune (Currently WFH)Job Description:We are looking for a Data Scientist to join our team and assist with Gerative AI, data analysis, modelling, NLP tasks and visualization. The ideal candidate will have a strong foundation in statistics, programming, and machine learning techniques.Responsibilities:Clean and preprocess data to prepare it for analysisAnalyze data using statistical techniques to identify patterns and trendsBuild predictive models using machine learning algorithmsVisualize and present data insights using graphs, charts, and other toolsCollaborate with team members to develop and test data-driven solutionsStay up-to-date with industry trends and advancements in data scienceRequirements:Currently enrolled in the final year of a  degree program in Computer Science, Statistics, Mathematics, or a related fieldFamiliarity with programming languages such as Python or RBasic understanding of machine learning techniques and algorithmsExperience with data visualization tools such as Tableau or Power BIStrong problem-solving skills and attention to detailExcellent communication and teamwork skillsAbility to work independently and meet deadlinesPreferred Qualifications:Experience with cloud-based platforms such as AWS, Generative AIKnowledge of natural language processing (NLP) or deep learning techniquesThis is a full-time joining opportunity with flexible hours and candidates will work on the latest technology and build products as per the needs of the business. Interested candidates should submit their resume and a cover letter outlining their qualifications and interest in the position.' href='javascript:void(0);' onclick='TPJNFView("2","454","2023-2024");'>Job Title: Junior Data ScientistJob Type: Full Time (Freshers)Job Location: Pune (Currently WFH)Job Description:We are looking for a Data Scientist to join our team and assist with Gerative AI, data analysis, modelling, NLP tasks and visualization. The ideal candidate will have a strong foundation in statistics, programming, and machine learning techniques.Responsibilities:Clean and preprocess data to prepare it for analysisAnalyze data using statistical techniques to identify patterns and trendsBuild predictive models using machine learning algorithmsVisualize and present data insights using graphs, charts, and other toolsCollaborate with team members to develop and test data-driven solutionsStay up-to-date with industry trends and advancements in data scienceRequirements:Currently enrolled in the final year of a  degree program in Computer Science, Statistics, Mathematics, or a related fieldFamiliarity with programming languages such as Python or RBasic understanding of machine learning techniques and algorithmsExperience with data visualization tools such as Tableau or Power BIStrong problem-solving skills and attention to detailExcellent communication and teamwork skillsAbility to work independently and meet deadlinesPreferred Qualifications:Experience with cloud-based platforms such as AWS, Generative AIKnowledge of natural language processing (NLP) or deep learning techniquesThis is a full-time joining opportunity with flexible hours and candidates will work on the latest technology and build products as per the needs of the business. Interested candidates should submit their resume and a cover letter outlining their qualifications and interest in the position.</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","454","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[1 Year]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","454","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[06-12-2023 20:00]]></cell>
        <cell><![CDATA[08-12-2023 17:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='98'>
        <cell><![CDATA[<a title='EY GDS' href='javascript:void(0);' onclick='TPComView("2023-2024","725");'>EY GDS</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","725");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","725");'></a>]]></cell>
        <cell><![CDATA[<a title='Product Analyst' href='javascript:void(0);' onclick='TPJNFView("1","725","2023-2024");'>Product Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","725","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1260000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","725","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 16:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='99'>
        <cell><![CDATA[<a title='EY India' href='javascript:void(0);' onclick='TPComView("2023-2024","658");'>EY India</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","658");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","658");'></a>]]></cell>
        <cell><![CDATA[<a title='Executive - Strategy & Transactions - GPS' href='javascript:void(0);' onclick='TPJNFView("3","658","2023-2024");'>Executive - Strategy & Transactions - GPS</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","658","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1005385]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","658","3");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 16:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='100'>
        <cell><![CDATA[<a title='FAXOC Jobs & HRIS' href='javascript:void(0);' onclick='TPComView("2023-2024","625");'>FAXOC Jobs & HRIS</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","625");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","625");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Development Engineer' href='javascript:void(0);' onclick='TPJNFView("1","625","2023-2024");'>Software Development Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","625","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2500000]]></cell>
        <cell><![CDATA[N/A]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","625","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[29-11-2023 15:00]]></cell>
        <cell><![CDATA[03-12-2023 23:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='101'>
        <cell><![CDATA[<a title='Finarb Analytics Consulting Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","622");'>Finarb Analytics Consulting Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","622");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","622");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Engineer' href='javascript:void(0);' onclick='TPJNFView("1","622","2023-2024");'>Data Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","622","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2300000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","622","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 07:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='102'>
        <cell><![CDATA[<a title='Finarb Analytics Consulting Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","622");'>Finarb Analytics Consulting Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","622");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","622");'></a>]]></cell>
        <cell><![CDATA[<a title='ML Engineer' href='javascript:void(0);' onclick='TPJNFView("2","622","2023-2024");'>ML Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","622","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2300000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","622","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 07:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='103'>
        <cell><![CDATA[<a title='Fintellix Solutions Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","778");'>Fintellix Solutions Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","778");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","778");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer II' href='javascript:void(0);' onclick='TPJNFView("1","778","2023-2024");'>Software Engineer II</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","778","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1402393]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","778","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 21:00]]></cell>
        <cell><![CDATA[29-11-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='104'>
        <cell><![CDATA[<a title='FINTOO' href='javascript:void(0);' onclick='TPComView("2023-2024","618");'>FINTOO</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","618");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","618");'></a>]]></cell>
        <cell><![CDATA[<a title='Wealth  Manager' href='javascript:void(0);' onclick='TPJNFView("1","618","2023-2024");'>Wealth  Manager</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","618","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[12]]></cell>
        <cell><![CDATA[YES]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","618","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='105'>
        <cell><![CDATA[<a title='FINTOO' href='javascript:void(0);' onclick='TPComView("2023-2024","618");'>FINTOO</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","618");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","618");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Developer' href='javascript:void(0);' onclick='TPJNFView("3","618","2023-2024");'>Software Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","618","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[13]]></cell>
        <cell><![CDATA[YES]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","618","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='106'>
        <cell><![CDATA[<a title='First Answer Pte Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","813");'>First Answer Pte Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","813");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","813");'></a>]]></cell>
        <cell><![CDATA[<a title='Machine Learning, AI and Data Science/ Product Engineering/ Fullstack Developer' href='javascript:void(0);' onclick='TPJNFView("1","813","2023-2024");'>Machine Learning, AI and Data Science/ Product Engineering/ Fullstack Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","813","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2685720]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","813","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[29-11-2023 15:00]]></cell>
        <cell><![CDATA[04-12-2023 21:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='107'>
        <cell><![CDATA[<a title='FISCHERJORDAN' href='javascript:void(0);' onclick='TPComView("2023-2024","777");'>FISCHERJORDAN</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","777");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","777");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Analyst' href='javascript:void(0);' onclick='TPJNFView("1","777","2023-2024");'>Data Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","777","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2130000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","777","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[24-01-2024 12:30]]></cell>
        <cell><![CDATA[26-01-2024 16:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='108'>
        <cell><![CDATA[<a title='Fiserv India Private Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","804");'>Fiserv India Private Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","804");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","804");'></a>]]></cell>
        <cell><![CDATA[<a title='Technology Analyst Program -1' href='javascript:void(0);' onclick='TPJNFView("1","804","2023-2024");'>Technology Analyst Program -1</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","804","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1625000]]></cell>
        <cell><![CDATA[N/A]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","804","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[17-11-2023 21:30]]></cell>
        <cell><![CDATA[27-03-2024 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='109'>
        <cell><![CDATA[<a title='FUJITSU REASEARCH OF INDIA PRIVATE LIMITED' href='javascript:void(0);' onclick='TPComView("2023-2024","320");'>FUJITSU REASEARCH OF INDIA PRIVATE LIMITED</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","320");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","320");'></a>]]></cell>
        <cell><![CDATA[<a title='Applied Researcher' href='javascript:void(0);' onclick='TPJNFView("1","320","2023-2024");'>Applied Researcher</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","320","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2200000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","320","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[16-10-2023 19:00]]></cell>
        <cell><![CDATA[18-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='110'>
        <cell><![CDATA[<a title='FUJITSU REASEARCH OF INDIA PRIVATE LIMITED' href='javascript:void(0);' onclick='TPComView("2023-2024","320");'>FUJITSU REASEARCH OF INDIA PRIVATE LIMITED</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","320");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","320");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Developer/ Engineer - High Performance Computing (HPC)' href='javascript:void(0);' onclick='TPJNFView("7","320","2023-2024");'>Software Developer/ Engineer - High Performance Computing (HPC)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("7","320","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","320","7");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[16-10-2023 19:00]]></cell>
        <cell><![CDATA[18-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='111'>
        <cell><![CDATA[<a title='FUJITSU REASEARCH OF INDIA PRIVATE LIMITED' href='javascript:void(0);' onclick='TPComView("2023-2024","320");'>FUJITSU REASEARCH OF INDIA PRIVATE LIMITED</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","320");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","320");'></a>]]></cell>
        <cell><![CDATA[<a title='Researcher- Predoc - AI' href='javascript:void(0);' onclick='TPJNFView("3","320","2023-2024");'>Researcher- Predoc - AI</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","320","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[Pre-Doctoral Program: Its a fixed term 2 years employment (contract) role, after 2 years student is expected to enroll for PhD. If not, then he/she must undergo lateral interview process to get converted into full time employee.]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","320","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[17-10-2023 19:00]]></cell>
        <cell><![CDATA[18-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='112'>
        <cell><![CDATA[<a title='Futures First' href='javascript:void(0);' onclick='TPComView("2023-2024","697");'>Futures First</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","697");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","697");'></a>]]></cell>
        <cell><![CDATA[<a title='Market Analyst - Trainee' href='javascript:void(0);' onclick='TPJNFView("1","697","2023-2024");'>Market Analyst - Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","697","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1313000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","697","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[25-11-2023 16:00]]></cell>
        <cell><![CDATA[28-11-2023 16:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='113'>
        <cell><![CDATA[<a title='Galytix Analytics Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","717");'>Galytix Analytics Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","717");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","717");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer: Front-end' href='javascript:void(0);' onclick='TPJNFView("1","717","2023-2024");'>Software Engineer: Front-end</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","717","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","717","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='114'>
        <cell><![CDATA[<a title='Galytix Analytics Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","717");'>Galytix Analytics Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","717");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","717");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Engineer' href='javascript:void(0);' onclick='TPJNFView("3","717","2023-2024");'>Data Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","717","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","717","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='115'>
        <cell><![CDATA[<a title='Galytix Analytics Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","717");'>Galytix Analytics Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","717");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","717");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer: Back-end' href='javascript:void(0);' onclick='TPJNFView("2","717","2023-2024");'>Software Engineer: Back-end</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","717","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","717","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='116'>
        <cell><![CDATA[<a title='Gan Studio' href='javascript:void(0);' onclick='TPComView("2023-2024","608");'>Gan Studio</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","608");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","608");'></a>]]></cell>
        <cell><![CDATA[<a title='Deep Learning' href='javascript:void(0);' onclick='TPJNFView("2","608","2023-2024");'>Deep Learning</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","608","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","608","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 19:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='117'>
        <cell><![CDATA[<a title='Gan Studio' href='javascript:void(0);' onclick='TPComView("2023-2024","608");'>Gan Studio</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","608");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","608");'></a>]]></cell>
        <cell><![CDATA[<a title='Deep Learning Engineer' href='javascript:void(0);' onclick='TPJNFView("6","608","2023-2024");'>Deep Learning Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","608","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2000000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","608","6");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 19:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='118'>
        <cell><![CDATA[<a title='Gan Studio' href='javascript:void(0);' onclick='TPComView("2023-2024","608");'>Gan Studio</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","608");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","608");'></a>]]></cell>
        <cell><![CDATA[<a title='Backend Engineer' href='javascript:void(0);' onclick='TPJNFView("5","608","2023-2024");'>Backend Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","608","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","608","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 19:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='119'>
        <cell><![CDATA[<a title='Gan Studio' href='javascript:void(0);' onclick='TPComView("2023-2024","608");'>Gan Studio</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","608");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","608");'></a>]]></cell>
        <cell><![CDATA[<a title='Backend Engineer' href='javascript:void(0);' onclick='TPJNFView("1","608","2023-2024");'>Backend Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","608","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","608","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 17:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='120'>
        <cell><![CDATA[<a title='Gati Express and Supply Chain Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","965");'>Gati Express and Supply Chain Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","965");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","965");'></a>]]></cell>
        <cell><![CDATA[<a title='Solution Designer' href='javascript:void(0);' onclick='TPJNFView("1","965","2023-2024");'>Solution Designer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","965","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","965","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[06-12-2023 13:00]]></cell>
        <cell><![CDATA[07-12-2023 10:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='121'>
        <cell><![CDATA[<a title='GEM MACHINERY & ALLIED INDUSTRIES' href='javascript:void(0);' onclick='TPComView("2023-2024","576");'>GEM MACHINERY & ALLIED INDUSTRIES</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","576");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","576");'></a>]]></cell>
        <cell><![CDATA[<a title='Drawing & Design Engineer' href='javascript:void(0);' onclick='TPJNFView("1","576","2023-2024");'>Drawing & Design Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","576","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[550000]]></cell>
        <cell><![CDATA[2 years min]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","576","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-12-2023 18:00]]></cell>
        <cell><![CDATA[08-12-2023 08:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='122'>
        <cell><![CDATA[<a title='Greyorange' href='javascript:void(0);' onclick='TPComView("2023-2024","612");'>Greyorange</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","612");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","612");'></a>]]></cell>
        <cell><![CDATA[<a title='SDE' href='javascript:void(0);' onclick='TPJNFView("1","612","2023-2024");'>SDE</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","612","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2600000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","612","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 14:00]]></cell>
        <cell><![CDATA[29-11-2023 08:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='123'>
        <cell><![CDATA[<a title='Groundhog Apps Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","811");'>Groundhog Apps Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","811");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","811");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Developer' href='javascript:void(0);' onclick='TPJNFView("1","811","2023-2024");'>Software Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","811","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[800000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","811","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[05-12-2023 19:00]]></cell>
        <cell><![CDATA[06-12-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='124'>
        <cell><![CDATA[<a title='H2O.AI' href='javascript:void(0);' onclick='TPComView("2023-2024","881");'>H2O.AI</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","881");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","881");'></a>]]></cell>
        <cell><![CDATA[<a title='Technical Customer Manager' href='javascript:void(0);' onclick='TPJNFView("1","881","2023-2024");'>Technical Customer Manager</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","881","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","881","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[10-01-2024 16:00]]></cell>
        <cell><![CDATA[12-01-2024 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='125'>
        <cell><![CDATA[<a title='H2O.AI' href='javascript:void(0);' onclick='TPComView("2023-2024","881");'>H2O.AI</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","881");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","881");'></a>]]></cell>
        <cell><![CDATA[<a title='Customer Data Scientist' href='javascript:void(0);' onclick='TPJNFView("2","881","2023-2024");'>Customer Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","881","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2150000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","881","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[10-01-2024 16:00]]></cell>
        <cell><![CDATA[12-01-2024 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='126'>
        <cell><![CDATA[<a title='H2O.AI' href='javascript:void(0);' onclick='TPComView("2023-2024","881");'>H2O.AI</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","881");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","881");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineers/Solutions Architect' href='javascript:void(0);' onclick='TPJNFView("4","881","2023-2024");'>Software Engineers/Solutions Architect</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","881","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2300000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","881","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[10-01-2024 16:00]]></cell>
        <cell><![CDATA[12-01-2024 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='127'>
        <cell><![CDATA[<a title='Havells India Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","833");'>Havells India Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","833");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","833");'></a>]]></cell>
        <cell><![CDATA[<a title='IoT & Connectivity-AI/ML' href='javascript:void(0);' onclick='TPJNFView("1","833","2023-2024");'>IoT & Connectivity-AI/ML</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","833","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1900000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","833","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 16:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='128'>
        <cell><![CDATA[<a title='Havells India Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","833");'>Havells India Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","833");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","833");'></a>]]></cell>
        <cell><![CDATA[<a title='Power Electronics' href='javascript:void(0);' onclick='TPJNFView("2","833","2023-2024");'>Power Electronics</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","833","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1900000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","833","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 16:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='129'>
        <cell><![CDATA[<a title='Havells India Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","833");'>Havells India Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","833");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","833");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineering' href='javascript:void(0);' onclick='TPJNFView("3","833","2023-2024");'>Software Engineering</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","833","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1900000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","833","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 16:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='130'>
        <cell><![CDATA[<a title='HEADOUT' href='javascript:void(0);' onclick='TPComView("2023-2024","683");'>HEADOUT</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","683");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","683");'></a>]]></cell>
        <cell><![CDATA[<a title='Program Manager' href='javascript:void(0);' onclick='TPJNFView("1","683","2023-2024");'>Program Manager</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","683","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2001250]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","683","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 06:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='131'>
        <cell><![CDATA[<a title='HEADOUT' href='javascript:void(0);' onclick='TPComView("2023-2024","683");'>HEADOUT</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","683");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","683");'></a>]]></cell>
        <cell><![CDATA[<a title='Content Marketing Analyst' href='javascript:void(0);' onclick='TPJNFView("2","683","2023-2024");'>Content Marketing Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","683","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2001250]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","683","2");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 06:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='132'>
        <cell><![CDATA[<a title='Hexaware Technologies' href='javascript:void(0);' onclick='TPComView("2023-2024","1021");'>Hexaware Technologies</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1021");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1021");'></a>]]></cell>
        <cell><![CDATA[<a title='Exponential Mavericks' href='javascript:void(0);' onclick='TPJNFView("1","1021","2023-2024");'>Exponential Mavericks</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1021","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1021","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[13-12-2023 19:00]]></cell>
        <cell><![CDATA[05-01-2024 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='133'>
        <cell><![CDATA[<a title='HFCL Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","952");'>HFCL Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","952");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","952");'></a>]]></cell>
        <cell><![CDATA[<a title='PGET - Material Science' href='javascript:void(0);' onclick='TPJNFView("1","952","2023-2024");'>PGET - Material Science</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","952","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[15]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","952","1");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[04-12-2023 23:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='134'>
        <cell><![CDATA[<a title='HFCL Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","952");'>HFCL Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","952");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","952");'></a>]]></cell>
        <cell><![CDATA[<a title='PGET - Optoelectronics and Optical Communication' href='javascript:void(0);' onclick='TPJNFView("2","952","2023-2024");'>PGET - Optoelectronics and Optical Communication</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","952","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[15]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","952","2");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[04-12-2023 23:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='135'>
        <cell><![CDATA[<a title='HILABS INC.' href='javascript:void(0);' onclick='TPComView("2023-2024","257");'>HILABS INC.</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","257");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","257");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Product Manager' href='javascript:void(0);' onclick='TPJNFView("1","257","2023-2024");'>Associate Product Manager</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","257","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3293750]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","257","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[23-10-2023 20:25]]></cell>
        <cell><![CDATA[25-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='136'>
        <cell><![CDATA[<a title='HILABS INC.' href='javascript:void(0);' onclick='TPComView("2023-2024","257");'>HILABS INC.</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","257");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","257");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Scientist I - US' href='javascript:void(0);' onclick='TPJNFView("5","257","2023-2024");'>Data Scientist I - US</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","257","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[103125]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","257","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[23-10-2023 20:25]]></cell>
        <cell><![CDATA[25-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='137'>
        <cell><![CDATA[<a title='HILABS INC.' href='javascript:void(0);' onclick='TPComView("2023-2024","257");'>HILABS INC.</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","257");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","257");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Product Manager - US' href='javascript:void(0);' onclick='TPJNFView("6","257","2023-2024");'>Associate Product Manager - US</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","257","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[103125]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","257","6");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[23-10-2023 20:25]]></cell>
        <cell><![CDATA[25-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='138'>
        <cell><![CDATA[<a title='Houlihan Lokey' href='javascript:void(0);' onclick='TPComView("2023-2024","302");'>Houlihan Lokey</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","302");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","302");'></a>]]></cell>
        <cell><![CDATA[<a title='Financial Analyst' href='javascript:void(0);' onclick='TPJNFView("1","302","2023-2024");'>Financial Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","302","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[900000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","302","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[07-11-2023 21:20]]></cell>
        <cell><![CDATA[08-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='139'>
        <cell><![CDATA[<a title='Husk Power Systems Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","159");'>Husk Power Systems Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","159");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","159");'></a>]]></cell>
        <cell><![CDATA[<a title='Electrical Engineer Trainee' href='javascript:void(0);' onclick='TPJNFView("2","159","2023-2024");'>Electrical Engineer Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","159","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1300000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","159","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[11-01-2024 13:00]]></cell>
        <cell><![CDATA[13-01-2024 16:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='140'>
        <cell><![CDATA[<a title='Husk Power Systems Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","159");'>Husk Power Systems Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","159");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","159");'></a>]]></cell>
        <cell><![CDATA[<a title='Embedded Engineer Trainee' href='javascript:void(0);' onclick='TPJNFView("1","159","2023-2024");'>Embedded Engineer Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","159","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1300000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","159","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[11-01-2024 13:00]]></cell>
        <cell><![CDATA[13-01-2024 16:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='141'>
        <cell><![CDATA[<a title='Hyprbots Systems' href='javascript:void(0);' onclick='TPComView("2023-2024","894");'>Hyprbots Systems</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","894");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","894");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Development Engineer' href='javascript:void(0);' onclick='TPJNFView("2","894","2023-2024");'>Software Development Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","894","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2000000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","894","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[29-11-2023 15:00]]></cell>
        <cell><![CDATA[30-11-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='142'>
        <cell><![CDATA[<a title='Hyprbots Systems' href='javascript:void(0);' onclick='TPComView("2023-2024","894");'>Hyprbots Systems</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","894");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","894");'></a>]]></cell>
        <cell><![CDATA[<a title='AI/ML Engineer' href='javascript:void(0);' onclick='TPJNFView("1","894","2023-2024");'>AI/ML Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","894","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2500000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","894","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[29-11-2023 15:00]]></cell>
        <cell><![CDATA[30-11-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='143'>
        <cell><![CDATA[<a title='ICF' href='javascript:void(0);' onclick='TPComView("2023-2024","749");'>ICF</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","749");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","749");'></a>]]></cell>
        <cell><![CDATA[<a title='Junior Analyst' href='javascript:void(0);' onclick='TPJNFView("1","749","2023-2024");'>Junior Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","749","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","749","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[28-11-2023 14:00]]></cell>
        <cell><![CDATA[29-11-2023 08:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='144'>
        <cell><![CDATA[<a title='ICFAI University Tripura' href='javascript:void(0);' onclick='TPComView("2023-2024","485");'>ICFAI University Tripura</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","485");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","485");'></a>]]></cell>
        <cell><![CDATA[<a title='Professor/Associate Professor/Assistant Professor' href='javascript:void(0);' onclick='TPJNFView("1","485","2023-2024");'>Professor/Associate Professor/Assistant Professor</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","485","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[840000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","485","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[08-12-2023 17:00]]></cell>
        <cell><![CDATA[09-12-2023 14:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='145'>
        <cell><![CDATA[<a title='ICICI LOMBARD GIC LTD.' href='javascript:void(0);' onclick='TPComView("2023-2024","133");'>ICICI LOMBARD GIC LTD.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","133");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","133");'></a>]]></cell>
        <cell><![CDATA[<a title='Senior Developer' href='javascript:void(0);' onclick='TPJNFView("1","133","2023-2024");'>Senior Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","133","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1270000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","133","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[25-11-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='146'>
        <cell><![CDATA[<a title='ICICI LOMBARD GIC LTD.' href='javascript:void(0);' onclick='TPComView("2023-2024","133");'>ICICI LOMBARD GIC LTD.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","133");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","133");'></a>]]></cell>
        <cell><![CDATA[<a title='Senior Manager Data Engineer' href='javascript:void(0);' onclick='TPJNFView("4","133","2023-2024");'>Senior Manager Data Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","133","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1270000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","133","4");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[25-11-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='147'>
        <cell><![CDATA[<a title='ICICI LOMBARD GIC LTD.' href='javascript:void(0);' onclick='TPComView("2023-2024","133");'>ICICI LOMBARD GIC LTD.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","133");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","133");'></a>]]></cell>
        <cell><![CDATA[<a title='Senior Manager - Strategy & Innovation' href='javascript:void(0);' onclick='TPJNFView("5","133","2023-2024");'>Senior Manager - Strategy & Innovation</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","133","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1270000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","133","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[25-11-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='148'>
        <cell><![CDATA[<a title='ICICI LOMBARD GIC LTD.' href='javascript:void(0);' onclick='TPComView("2023-2024","133");'>ICICI LOMBARD GIC LTD.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","133");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","133");'></a>]]></cell>
        <cell><![CDATA[<a title='Senior Manager Data Scientist' href='javascript:void(0);' onclick='TPJNFView("3","133","2023-2024");'>Senior Manager Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","133","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1270000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","133","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[25-11-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='149'>
        <cell><![CDATA[<a title='ICICI LOMBARD GIC LTD.' href='javascript:void(0);' onclick='TPComView("2023-2024","133");'>ICICI LOMBARD GIC LTD.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","133");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","133");'></a>]]></cell>
        <cell><![CDATA[<a title='Senior Manager Actuarial Analyst' href='javascript:void(0);' onclick='TPJNFView("2","133","2023-2024");'>Senior Manager Actuarial Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","133","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1270000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","133","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[25-11-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='150'>
        <cell><![CDATA[<a title='IItian's PACE Education Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","603");'>IItian's PACE Education Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","603");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","603");'></a>]]></cell>
        <cell><![CDATA[<a title='Trainee' href='javascript:void(0);' onclick='TPJNFView("1","603","2023-2024");'>Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","603","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[Yes]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","603","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[01-12-2023 16:00]]></cell>
        <cell><![CDATA[06-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='151'>
        <cell><![CDATA[<a title='IMC Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","476");'>IMC Limited</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","476");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","476");'></a>]]></cell>
        <cell><![CDATA[<a title='Petroleum Engineer' href='javascript:void(0);' onclick='TPJNFView("2","476","2023-2024");'>Petroleum Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","476","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[970500]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","476","2");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='152'>
        <cell><![CDATA[<a title='IMC Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","476");'>IMC Limited</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","476");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","476");'></a>]]></cell>
        <cell><![CDATA[<a title='Mechanical Engineer' href='javascript:void(0);' onclick='TPJNFView("3","476","2023-2024");'>Mechanical Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","476","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[824925]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","476","3");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='153'>
        <cell><![CDATA[<a title='Infinite Civil solution pvt ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","554");'>Infinite Civil solution pvt ltd</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","554");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","554");'></a>]]></cell>
        <cell><![CDATA[<a title='Junior Engineer Structures' href='javascript:void(0);' onclick='TPJNFView("1","554","2023-2024");'>Junior Engineer Structures</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","554","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[2 years]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","554","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-12-2023 13:00]]></cell>
        <cell><![CDATA[07-12-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='154'>
        <cell><![CDATA[<a title='Infoedge India Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","300");'>Infoedge India Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","300");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","300");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Science' href='javascript:void(0);' onclick='TPJNFView("3","300","2023-2024");'>Data Science</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","300","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2100000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","300","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[25-10-2023 22:45]]></cell>
        <cell><![CDATA[27-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='155'>
        <cell><![CDATA[<a title='INFOSYS' href='javascript:void(0);' onclick='TPComView("2023-2024","1044");'>INFOSYS</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1044");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1044");'></a>]]></cell>
        <cell><![CDATA[<a title='Specialist Programmer' href='javascript:void(0);' onclick='TPJNFView("1","1044","2023-2024");'>Specialist Programmer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1044","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1300000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1044","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[23-12-2023 15:40]]></cell>
        <cell><![CDATA[27-12-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='156'>
        <cell><![CDATA[<a title='Intellipaat' href='javascript:void(0);' onclick='TPComView("2023-2024","966");'>Intellipaat</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","966");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","966");'></a>]]></cell>
        <cell><![CDATA[<a title='Business Development Trainee/Associate' href='javascript:void(0);' onclick='TPJNFView("1","966","2023-2024");'>Business Development Trainee/Associate</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","966","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[725000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","966","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-12-2023 13:00]]></cell>
        <cell><![CDATA[07-12-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='157'>
        <cell><![CDATA[<a title='Intel Technology India Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","23");'>Intel Technology India Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","23");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","23");'></a>]]></cell>
        <cell><![CDATA[<a title='Hardware Engineer' href='javascript:void(0);' onclick='TPJNFView("5","23","2023-2024");'>Hardware Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","23","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1977327]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","23","5");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[11-10-2023 17:00]]></cell>
        <cell><![CDATA[13-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='158'>
        <cell><![CDATA[<a title='Intel Technology India Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","23");'>Intel Technology India Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","23");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","23");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("6","23","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","23","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1977327]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","23","6");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[11-10-2023 17:00]]></cell>
        <cell><![CDATA[13-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='159'>
        <cell><![CDATA[<a title='ITS Planners and Engineers Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","702");'>ITS Planners and Engineers Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","702");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","702");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineering' href='javascript:void(0);' onclick='TPJNFView("1","702","2023-2024");'>Software Engineering</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","702","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[800000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","702","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-12-2023 13:00]]></cell>
        <cell><![CDATA[07-12-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='160'>
        <cell><![CDATA[<a title='K12 TECHNOSERVICES' href='javascript:void(0);' onclick='TPComView("2023-2024","1039");'>K12 TECHNOSERVICES</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1039");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1039");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Developer' href='javascript:void(0);' onclick='TPJNFView("1","1039","2023-2024");'>Software Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1039","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1039","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[21-12-2023 12:45]]></cell>
        <cell><![CDATA[22-12-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='161'>
        <cell><![CDATA[<a title='Keshcutai' href='javascript:void(0);' onclick='TPComView("2023-2024","580");'>Keshcutai</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","580");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","580");'></a>]]></cell>
        <cell><![CDATA[<a title='AI /ML Engineer' href='javascript:void(0);' onclick='TPJNFView("1","580","2023-2024");'>AI /ML Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","580","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2550000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","580","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 09:00]]></cell>
        <cell><![CDATA[29-11-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='162'>
        <cell><![CDATA[<a title='Kirloskar Oil Engines Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","1041");'>Kirloskar Oil Engines Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1041");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1041");'></a>]]></cell>
        <cell><![CDATA[<a title='Post Graduate Engineer Trainee' href='javascript:void(0);' onclick='TPJNFView("1","1041","2023-2024");'>Post Graduate Engineer Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1041","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[12,10,008]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1041","1");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[08-02-2024 17:20]]></cell>
        <cell><![CDATA[09-02-2024 10:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='163'>
        <cell><![CDATA[<a title='Kotak Mahindra Bank Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","661");'>Kotak Mahindra Bank Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","661");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","661");'></a>]]></cell>
        <cell><![CDATA[<a title='Management Trainee - Risk Manager' href='javascript:void(0);' onclick='TPJNFView("3","661","2023-2024");'>Management Trainee - Risk Manager</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","661","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1700000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","661","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[29-11-2023 14:00]]></cell>
        <cell><![CDATA[30-11-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='164'>
        <cell><![CDATA[<a title='LatentView Analytics' href='javascript:void(0);' onclick='TPComView("2023-2024","229");'>LatentView Analytics</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","229");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","229");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Analyst' href='javascript:void(0);' onclick='TPJNFView("1","229","2023-2024");'>Data Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","229","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[9 LPA12.75 LPA(THE STARTING SALARY IS DETERMINED BY EXPERIENCE AND OVERALL INTERVIEW PERFORMANCE.)]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","229","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[06-12-2023 20:00]]></cell>
        <cell><![CDATA[08-12-2023 17:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='165'>
        <cell><![CDATA[<a title='Lime.ai' href='javascript:void(0);' onclick='TPComView("2023-2024","907");'>Lime.ai</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","907");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","907");'></a>]]></cell>
        <cell><![CDATA[<a title='Cell Modelling' href='javascript:void(0);' onclick='TPJNFView("1","907","2023-2024");'>Cell Modelling</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","907","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000007]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","907","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='166'>
        <cell><![CDATA[<a title='Liminal Custody Solutions' href='javascript:void(0);' onclick='TPComView("2023-2024","865");'>Liminal Custody Solutions</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","865");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","865");'></a>]]></cell>
        <cell><![CDATA[<a title='Product Engineering' href='javascript:void(0);' onclick='TPJNFView("2","865","2023-2024");'>Product Engineering</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","865","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2685720]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","865","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 14:00]]></cell>
        <cell><![CDATA[29-11-2023 08:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='167'>
        <cell><![CDATA[<a title='Liminal Custody Solutions' href='javascript:void(0);' onclick='TPComView("2023-2024","865");'>Liminal Custody Solutions</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","865");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","865");'></a>]]></cell>
        <cell><![CDATA[<a title='Fullstack Developer' href='javascript:void(0);' onclick='TPJNFView("3","865","2023-2024");'>Fullstack Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","865","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2685720]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","865","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 14:00]]></cell>
        <cell><![CDATA[29-11-2023 08:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='168'>
        <cell><![CDATA[<a title='Liminal Custody Solutions' href='javascript:void(0);' onclick='TPComView("2023-2024","865");'>Liminal Custody Solutions</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","865");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","865");'></a>]]></cell>
        <cell><![CDATA[<a title='Machine Learning, AI and Data Science' href='javascript:void(0);' onclick='TPJNFView("1","865","2023-2024");'>Machine Learning, AI and Data Science</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","865","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2685720]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","865","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 14:00]]></cell>
        <cell><![CDATA[29-11-2023 08:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='169'>
        <cell><![CDATA[<a title='MAHINDRA & MAHINDRA' href='javascript:void(0);' onclick='TPComView("2023-2024","772");'>MAHINDRA & MAHINDRA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","772");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","772");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Engineer Trainees  CCM' href='javascript:void(0);' onclick='TPJNFView("8","772","2023-2024");'>Graduate Engineer Trainees  CCM</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("8","772","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[800000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","772","8");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[13-02-2024 12:00]]></cell>
        <cell><![CDATA[14-02-2024 17:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='170'>
        <cell><![CDATA[<a title='MAHINDRA & MAHINDRA' href='javascript:void(0);' onclick='TPComView("2023-2024","772");'>MAHINDRA & MAHINDRA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","772");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","772");'></a>]]></cell>
        <cell><![CDATA[<a title='GET' href='javascript:void(0);' onclick='TPJNFView("9","772","2023-2024");'>GET</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("9","772","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[800000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","772","9");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[13-02-2024 12:00]]></cell>
        <cell><![CDATA[14-02-2024 17:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='171'>
        <cell><![CDATA[<a title='MAHINDRA & MAHINDRA' href='javascript:void(0);' onclick='TPComView("2023-2024","772");'>MAHINDRA & MAHINDRA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","772");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","772");'></a>]]></cell>
        <cell><![CDATA[<a title='GET_Electrical (Manufacturing)' href='javascript:void(0);' onclick='TPJNFView("6","772","2023-2024");'>GET_Electrical (Manufacturing)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","772","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[800000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","772","6");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[13-02-2024 12:00]]></cell>
        <cell><![CDATA[14-02-2024 17:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='172'>
        <cell><![CDATA[<a title='MAQ Software' href='javascript:void(0);' onclick='TPComView("2023-2024","828");'>MAQ Software</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","828");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","828");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer 1' href='javascript:void(0);' onclick='TPJNFView("1","828","2023-2024");'>Software Engineer 1</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","828","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1300000]]></cell>
        <cell><![CDATA[Yes]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","828","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 06:00]]></cell>
        <cell><![CDATA[03-12-2023 23:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='173'>
        <cell><![CDATA[<a title='MASTERCARD' href='javascript:void(0);' onclick='TPComView("2023-2024","42");'>MASTERCARD</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","42");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","42");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Product Specialist, Product Manager' href='javascript:void(0);' onclick='TPJNFView("3","42","2023-2024");'>Associate Product Specialist, Product Manager</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","42","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2043500]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","42","3");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[11-10-2023 17:00]]></cell>
        <cell><![CDATA[13-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='174'>
        <cell><![CDATA[<a title='MATHWORKS INDIA PRIVATE LIMITED' href='javascript:void(0);' onclick='TPComView("2023-2024","515");'>MATHWORKS INDIA PRIVATE LIMITED</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","515");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","515");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate in Engineering Development Group' href='javascript:void(0);' onclick='TPJNFView("4","515","2023-2024");'>Associate in Engineering Development Group</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","515","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2591039]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","515","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[23-10-2023 20:25]]></cell>
        <cell><![CDATA[25-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='175'>
        <cell><![CDATA[<a title='MECON LIMITED' href='javascript:void(0);' onclick='TPComView("2023-2024","890");'>MECON LIMITED</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","890");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","890");'></a>]]></cell>
        <cell><![CDATA[<a title='Management Trainee (Technical)' href='javascript:void(0);' onclick='TPJNFView("2","890","2023-2024");'>Management Trainee (Technical)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","890","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1263000]]></cell>
        <cell><![CDATA[.]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","890","2");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-11-2023 19:00]]></cell>
        <cell><![CDATA[15-01-2024 10:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='176'>
        <cell><![CDATA[<a title='MEESHO' href='javascript:void(0);' onclick='TPComView("2023-2024","298");'>MEESHO</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","298");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","298");'></a>]]></cell>
        <cell><![CDATA[<a title='Senior Associate - Finance' href='javascript:void(0);' onclick='TPJNFView("4","298","2023-2024");'>Senior Associate - Finance</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","298","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","298","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[14-11-2023 00:30]]></cell>
        <cell><![CDATA[15-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='177'>
        <cell><![CDATA[<a title='MEESHO' href='javascript:void(0);' onclick='TPComView("2023-2024","298");'>MEESHO</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","298");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","298");'></a>]]></cell>
        <cell><![CDATA[<a title='Senior Associate- Growth' href='javascript:void(0);' onclick='TPJNFView("3","298","2023-2024");'>Senior Associate- Growth</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","298","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","298","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[14-11-2023 00:30]]></cell>
        <cell><![CDATA[15-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='178'>
        <cell><![CDATA[<a title='MEESHO' href='javascript:void(0);' onclick='TPComView("2023-2024","298");'>MEESHO</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","298");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","298");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Business Manager- Trainee' href='javascript:void(0);' onclick='TPJNFView("5","298","2023-2024");'>Associate Business Manager- Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","298","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","298","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[14-11-2023 00:30]]></cell>
        <cell><![CDATA[15-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='179'>
        <cell><![CDATA[<a title='MEESHO' href='javascript:void(0);' onclick='TPComView("2023-2024","298");'>MEESHO</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","298");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","298");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Development Engineer I' href='javascript:void(0);' onclick='TPJNFView("1","298","2023-2024");'>Software Development Engineer I</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","298","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3400000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","298","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-10-2023 19:30]]></cell>
        <cell><![CDATA[30-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='180'>
        <cell><![CDATA[<a title='Midas Research & Development Center India Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","756");'>Midas Research & Development Center India Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","756");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","756");'></a>]]></cell>
        <cell><![CDATA[<a title='Technical Support Engineer' href='javascript:void(0);' onclick='TPJNFView("1","756","2023-2024");'>Technical Support Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","756","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[862000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","756","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='181'>
        <cell><![CDATA[<a title='Miko.ai' href='javascript:void(0);' onclick='TPComView("2023-2024","718");'>Miko.ai</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","718");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","718");'></a>]]></cell>
        <cell><![CDATA[<a title='AI Audio and Speech Engineer' href='javascript:void(0);' onclick='TPJNFView("4","718","2023-2024");'>AI Audio and Speech Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","718","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","718","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[07-12-2023 15:00]]></cell>
        <cell><![CDATA[08-12-2023 10:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='182'>
        <cell><![CDATA[<a title='Miko.ai' href='javascript:void(0);' onclick='TPComView("2023-2024","718");'>Miko.ai</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","718");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","718");'></a>]]></cell>
        <cell><![CDATA[<a title='AI NLP Engineer' href='javascript:void(0);' onclick='TPJNFView("3","718","2023-2024");'>AI NLP Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","718","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","718","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[07-12-2023 15:00]]></cell>
        <cell><![CDATA[08-12-2023 10:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='183'>
        <cell><![CDATA[<a title='Miko.ai' href='javascript:void(0);' onclick='TPComView("2023-2024","718");'>Miko.ai</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","718");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","718");'></a>]]></cell>
        <cell><![CDATA[<a title='AI Image Processing Engineer' href='javascript:void(0);' onclick='TPJNFView("5","718","2023-2024");'>AI Image Processing Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","718","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","718","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[07-12-2023 15:00]]></cell>
        <cell><![CDATA[08-12-2023 10:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='184'>
        <cell><![CDATA[<a title='MINDSPRINT' href='javascript:void(0);' onclick='TPComView("2023-2024","882");'>MINDSPRINT</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","882");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","882");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Engineer' href='javascript:void(0);' onclick='TPJNFView("1","882","2023-2024");'>Data Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","882","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1518000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","882","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 21:00]]></cell>
        <cell><![CDATA[29-11-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='185'>
        <cell><![CDATA[<a title='Minimalist' href='javascript:void(0);' onclick='TPComView("2023-2024","959");'>Minimalist</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","959");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","959");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Product Manager' href='javascript:void(0);' onclick='TPJNFView("1","959","2023-2024");'>Associate Product Manager</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","959","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2100000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","959","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 07:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='186'>
        <cell><![CDATA[<a title='Minimalist' href='javascript:void(0);' onclick='TPComView("2023-2024","959");'>Minimalist</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","959");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","959");'></a>]]></cell>
        <cell><![CDATA[<a title='Growth Manager' href='javascript:void(0);' onclick='TPJNFView("2","959","2023-2024");'>Growth Manager</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","959","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2100000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","959","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 07:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='187'>
        <cell><![CDATA[<a title='MRF Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","591");'>MRF Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","591");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","591");'></a>]]></cell>
        <cell><![CDATA[<a title='Executive Technical' href='javascript:void(0);' onclick='TPJNFView("1","591","2023-2024");'>Executive Technical</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","591","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[988598]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","591","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[25-11-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='188'>
        <cell><![CDATA[<a title='National Payments Corporation of India (NPCI)' href='javascript:void(0);' onclick='TPComView("2023-2024","187");'>National Payments Corporation of India (NPCI)</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","187");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","187");'></a>]]></cell>
        <cell><![CDATA[<a title='IT ANALYST - AI BOT' href='javascript:void(0);' onclick='TPJNFView("3","187","2023-2024");'>IT ANALYST - AI BOT</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","187","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2006000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","187","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[19-11-2023 18:00]]></cell>
        <cell><![CDATA[20-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='189'>
        <cell><![CDATA[<a title='National Payments Corporation of India (NPCI)' href='javascript:void(0);' onclick='TPComView("2023-2024","187");'>National Payments Corporation of India (NPCI)</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","187");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","187");'></a>]]></cell>
        <cell><![CDATA[<a title='IT ANALYST - BLOCKCHAIN' href='javascript:void(0);' onclick='TPJNFView("5","187","2023-2024");'>IT ANALYST - BLOCKCHAIN</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","187","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2006000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","187","5");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[19-11-2023 18:00]]></cell>
        <cell><![CDATA[20-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='190'>
        <cell><![CDATA[<a title='National Stock Exchange of India' href='javascript:void(0);' onclick='TPComView("2023-2024","1040");'>National Stock Exchange of India</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1040");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1040");'></a>]]></cell>
        <cell><![CDATA[<a title='Regulatory Technology' href='javascript:void(0);' onclick='TPJNFView("2","1040","2023-2024");'>Regulatory Technology</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","1040","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1350000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1040","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[08-01-2024 17:00]]></cell>
        <cell><![CDATA[09-01-2024 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='191'>
        <cell><![CDATA[<a title='National Stock Exchange of India' href='javascript:void(0);' onclick='TPComView("2023-2024","1040");'>National Stock Exchange of India</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1040");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1040");'></a>]]></cell>
        <cell><![CDATA[<a title='Tool & Automation' href='javascript:void(0);' onclick='TPJNFView("3","1040","2023-2024");'>Tool & Automation</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","1040","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1350000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1040","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[08-01-2024 17:00]]></cell>
        <cell><![CDATA[09-01-2024 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='192'>
        <cell><![CDATA[<a title='National Stock Exchange of India' href='javascript:void(0);' onclick='TPComView("2023-2024","1040");'>National Stock Exchange of India</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1040");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1040");'></a>]]></cell>
        <cell><![CDATA[<a title='Technology Operations' href='javascript:void(0);' onclick='TPJNFView("4","1040","2023-2024");'>Technology Operations</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","1040","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1350000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1040","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[08-01-2024 17:00]]></cell>
        <cell><![CDATA[09-01-2024 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='193'>
        <cell><![CDATA[<a title='NeenOpal Inc.' href='javascript:void(0);' onclick='TPComView("2023-2024","493");'>NeenOpal Inc.</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","493");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","493");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Data Analyst' href='javascript:void(0);' onclick='TPJNFView("2","493","2023-2024");'>Data Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","493","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[720000]]></cell>
        <cell><![CDATA[1 year bond- applicable to all the new joiners (Bond Amount- 30% of CTC shhould be given to the company only if the bond is breached)]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","493","2");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-12-2023 20:00]]></cell>
        <cell><![CDATA[07-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='194'>
        <cell><![CDATA[<a title='NeenOpal Inc.' href='javascript:void(0);' onclick='TPComView("2023-2024","493");'>NeenOpal Inc.</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","493");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","493");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Data Scientist' href='javascript:void(0);' onclick='TPJNFView("1","493","2023-2024");'>Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","493","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[900000]]></cell>
        <cell><![CDATA[1 year bond- applicable to all the new joiners (Bond Amount- 30% of CTC shhould be given to the company only if the bond is breached)]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","493","1");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-12-2023 20:00]]></cell>
        <cell><![CDATA[07-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='195'>
        <cell><![CDATA[<a title='Neometrix Engineering Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","791");'>Neometrix Engineering Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","791");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","791");'></a>]]></cell>
        <cell><![CDATA[<a title='Project Engineer' href='javascript:void(0);' onclick='TPJNFView("2","791","2023-2024");'>Project Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","791","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[625000]]></cell>
        <cell><![CDATA[Three Years of Bond (equivalent to six-months' salary) is compulsory.]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","791","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-12-2023 13:00]]></cell>
        <cell><![CDATA[07-12-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='196'>
        <cell><![CDATA[<a title='Neometrix Engineering Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","791");'>Neometrix Engineering Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","791");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","791");'></a>]]></cell>
        <cell><![CDATA[<a title='Application Engineer' href='javascript:void(0);' onclick='TPJNFView("3","791","2023-2024");'>Application Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","791","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[625000]]></cell>
        <cell><![CDATA[Strict 3-Years of Bond (equivalent to six-months' salary) is compulsory.]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","791","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-12-2023 13:00]]></cell>
        <cell><![CDATA[07-12-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='197'>
        <cell><![CDATA[<a title='Neometrix Engineering Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","791");'>Neometrix Engineering Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","791");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","791");'></a>]]></cell>
        <cell><![CDATA[<a title='Project Junior Engineer' href='javascript:void(0);' onclick='TPJNFView("4","791","2023-2024");'>Project Junior Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","791","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[Three Years of Bond (equivalent to six-months' salary) is compulsory]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","791","4");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-12-2023 13:00]]></cell>
        <cell><![CDATA[07-12-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='198'>
        <cell><![CDATA[<a title='Next Education India Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","744");'>Next Education India Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","744");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","744");'></a>]]></cell>
        <cell><![CDATA[<a title='Engineer - Technology' href='javascript:void(0);' onclick='TPJNFView("1","744","2023-2024");'>Engineer - Technology</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","744","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","744","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-12-2023 13:00]]></cell>
        <cell><![CDATA[07-12-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='199'>
        <cell><![CDATA[<a title='nFolks Software Technologies Pvt.Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","837");'>nFolks Software Technologies Pvt.Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","837");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","837");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("1","837","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","837","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2400000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","837","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[29-11-2023 15:00]]></cell>
        <cell><![CDATA[30-11-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='200'>
        <cell><![CDATA[<a title='NIVA BUPA HEALTH INSURANCE' href='javascript:void(0);' onclick='TPComView("2023-2024","902");'>NIVA BUPA HEALTH INSURANCE</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","902");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","902");'></a>]]></cell>
        <cell><![CDATA[<a title='Crest Executive Trainee  IT' href='javascript:void(0);' onclick='TPJNFView("1","902","2023-2024");'>Crest Executive Trainee  IT</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","902","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1860000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","902","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[25-11-2023 16:00]]></cell>
        <cell><![CDATA[26-11-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='201'>
        <cell><![CDATA[<a title='Niyo Solutions' href='javascript:void(0);' onclick='TPComView("2023-2024","668");'>Niyo Solutions</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","668");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","668");'></a>]]></cell>
        <cell><![CDATA[<a title='SDET-1' href='javascript:void(0);' onclick='TPJNFView("2","668","2023-2024");'>SDET-1</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","668","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","668","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[17-11-2023 21:30]]></cell>
        <cell><![CDATA[20-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='202'>
        <cell><![CDATA[<a title='Niyo Solutions' href='javascript:void(0);' onclick='TPComView("2023-2024","668");'>Niyo Solutions</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","668");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","668");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Product Manager' href='javascript:void(0);' onclick='TPJNFView("3","668","2023-2024");'>Associate Product Manager</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","668","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","668","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[17-11-2023 21:30]]></cell>
        <cell><![CDATA[20-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='203'>
        <cell><![CDATA[<a title='Niyo Solutions' href='javascript:void(0);' onclick='TPComView("2023-2024","668");'>Niyo Solutions</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","668");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","668");'></a>]]></cell>
        <cell><![CDATA[<a title='SDE-1' href='javascript:void(0);' onclick='TPJNFView("1","668","2023-2024");'>SDE-1</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","668","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","668","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[17-11-2023 21:30]]></cell>
        <cell><![CDATA[20-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='204'>
        <cell><![CDATA[<a title='NK Securities Research' href='javascript:void(0);' onclick='TPComView("2023-2024","18");'>NK Securities Research</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","18");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","18");'></a>]]></cell>
        <cell><![CDATA[<a title='Hardware Researcher' href='javascript:void(0);' onclick='TPJNFView("7","18","2023-2024");'>Hardware Researcher</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("7","18","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[5400000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","18","7");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[25-11-2023 16:00]]></cell>
        <cell><![CDATA[26-11-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='205'>
        <cell><![CDATA[<a title='NOMURA' href='javascript:void(0);' onclick='TPComView("2023-2024","44");'>NOMURA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","44");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","44");'></a>]]></cell>
        <cell><![CDATA[<a title='Analyst' href='javascript:void(0);' onclick='TPJNFView("6","44","2023-2024");'>Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","44","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1900000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","44","6");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[25-11-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='206'>
        <cell><![CDATA[<a title='NOMURA' href='javascript:void(0);' onclick='TPComView("2023-2024","44");'>NOMURA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","44");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","44");'></a>]]></cell>
        <cell><![CDATA[<a title='Risk Management Analyst - Model Validation Group' href='javascript:void(0);' onclick='TPJNFView("5","44","2023-2024");'>Risk Management Analyst - Model Validation Group</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","44","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1900000]]></cell>
        <cell><![CDATA[-]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","44","5");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[17-11-2023 21:30]]></cell>
        <cell><![CDATA[25-11-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='207'>
        <cell><![CDATA[<a title='NVIDIA' href='javascript:void(0);' onclick='TPComView("2023-2024","278");'>NVIDIA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","278");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","278");'></a>]]></cell>
        <cell><![CDATA[<a title='Verification Engineer' href='javascript:void(0);' onclick='TPJNFView("5","278","2023-2024");'>Verification Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","278","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2799758]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","278","5");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[27-10-2023 00:00]]></cell>
        <cell><![CDATA[29-10-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='208'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='DFT Engineering' href='javascript:void(0);' onclick='TPJNFView("19","491","2023-2024");'>DFT Engineering</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("19","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3700000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","19");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-01-2024 19:00]]></cell>
        <cell><![CDATA[11-01-2024 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='209'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='Electrical Engineer' href='javascript:void(0);' onclick='TPJNFView("11","491","2023-2024");'>Electrical Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("11","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","11");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[06-11-2023 22:50]]></cell>
        <cell><![CDATA[08-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='210'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='SoC Architecture' href='javascript:void(0);' onclick='TPJNFView("16","491","2023-2024");'>SoC Architecture</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("16","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3700000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","16");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-01-2024 19:00]]></cell>
        <cell><![CDATA[11-01-2024 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='211'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='SOC Frontend Methodology' href='javascript:void(0);' onclick='TPJNFView("17","491","2023-2024");'>SOC Frontend Methodology</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("17","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3700000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","17");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-01-2024 19:00]]></cell>
        <cell><![CDATA[11-01-2024 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='212'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='SOC RTL Design and Microarchitecture' href='javascript:void(0);' onclick='TPJNFView("18","491","2023-2024");'>SOC RTL Design and Microarchitecture</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("18","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3700000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","18");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-01-2024 19:00]]></cell>
        <cell><![CDATA[11-01-2024 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='213'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='SOC Physical Design' href='javascript:void(0);' onclick='TPJNFView("20","491","2023-2024");'>SOC Physical Design</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("20","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3700000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","20");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-01-2024 19:00]]></cell>
        <cell><![CDATA[11-01-2024 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='214'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='Electronics Engineer' href='javascript:void(0);' onclick='TPJNFView("10","491","2023-2024");'>Electronics Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("10","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","10");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-11-2023 22:50]]></cell>
        <cell><![CDATA[08-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='215'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='SOC Backend Methodology' href='javascript:void(0);' onclick='TPJNFView("21","491","2023-2024");'>SOC Backend Methodology</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("21","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3700000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","21");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-01-2024 19:00]]></cell>
        <cell><![CDATA[11-01-2024 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='216'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='Digital Verification Engineering' href='javascript:void(0);' onclick='TPJNFView("22","491","2023-2024");'>Digital Verification Engineering</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("22","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3700000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","22");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-01-2024 19:00]]></cell>
        <cell><![CDATA[11-01-2024 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='217'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='Emulation & Prototyping Engineering' href='javascript:void(0);' onclick='TPJNFView("23","491","2023-2024");'>Emulation & Prototyping Engineering</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("23","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3700000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","23");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-01-2024 19:00]]></cell>
        <cell><![CDATA[11-01-2024 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='218'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='3DIC and Package Design' href='javascript:void(0);' onclick='TPJNFView("24","491","2023-2024");'>3DIC and Package Design</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("24","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3700000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","24");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-01-2024 19:00]]></cell>
        <cell><![CDATA[11-01-2024 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='219'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='Platform Design Engineering' href='javascript:void(0);' onclick='TPJNFView("25","491","2023-2024");'>Platform Design Engineering</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("25","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3700000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","25");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-01-2024 19:00]]></cell>
        <cell><![CDATA[11-01-2024 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='220'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='Infrastructure Engineer' href='javascript:void(0);' onclick='TPJNFView("26","491","2023-2024");'>Infrastructure Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("26","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3700000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","26");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-01-2024 19:00]]></cell>
        <cell><![CDATA[11-01-2024 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='221'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='Product Analyst' href='javascript:void(0);' onclick='TPJNFView("27","491","2023-2024");'>Product Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("27","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3700000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","27");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-01-2024 19:00]]></cell>
        <cell><![CDATA[11-01-2024 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='222'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer - Platform Development' href='javascript:void(0);' onclick='TPJNFView("28","491","2023-2024");'>Software Engineer - Platform Development</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("28","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3700000]]></cell>
        <cell><![CDATA[N/A]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","28");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-01-2024 19:00]]></cell>
        <cell><![CDATA[11-01-2024 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='223'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer - AL/ML' href='javascript:void(0);' onclick='TPJNFView("29","491","2023-2024");'>Software Engineer - AL/ML</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("29","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3700000]]></cell>
        <cell><![CDATA[N/A]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","29");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-01-2024 19:00]]></cell>
        <cell><![CDATA[11-01-2024 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='224'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer -  AI based Automation of Cloud and Platform SW' href='javascript:void(0);' onclick='TPJNFView("30","491","2023-2024");'>Software Engineer -  AI based Automation of Cloud and Platform SW</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("30","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3700000]]></cell>
        <cell><![CDATA[N/A]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","30");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-01-2024 19:00]]></cell>
        <cell><![CDATA[11-01-2024 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='225'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer -  AI/ML based software triaging and debug' href='javascript:void(0);' onclick='TPJNFView("31","491","2023-2024");'>Software Engineer -  AI/ML based software triaging and debug</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("31","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3700000]]></cell>
        <cell><![CDATA[N/A]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","31");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-01-2024 19:00]]></cell>
        <cell><![CDATA[11-01-2024 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='226'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='Embedded Engineer I' href='javascript:void(0);' onclick='TPJNFView("15","491","2023-2024");'>Embedded Engineer I</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("15","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","15");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-11-2023 22:50]]></cell>
        <cell><![CDATA[08-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='227'>
        <cell><![CDATA[<a title='OneBanc Technologies' href='javascript:void(0);' onclick='TPComView("2023-2024","1594");'>OneBanc Technologies</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1594");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1594");'></a>]]></cell>
        <cell><![CDATA[<a title='Module Owner' href='javascript:void(0);' onclick='TPJNFView("1","1594","2023-2024");'>Module Owner</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1594","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1600000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1594","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[13-04-2024 13:00]]></cell>
        <cell><![CDATA[15-04-2024 17:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='228'>
        <cell><![CDATA[<a title='OneByZero' href='javascript:void(0);' onclick='TPComView("2023-2024","757");'>OneByZero</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","757");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","757");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Scientist' href='javascript:void(0);' onclick='TPJNFView("1","757","2023-2024");'>Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","757","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2000000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","757","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[04-12-2023 20:00]]></cell>
        <cell><![CDATA[05-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='229'>
        <cell><![CDATA[<a title='Onsurity' href='javascript:void(0);' onclick='TPComView("2023-2024","734");'>Onsurity</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","734");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","734");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Development Engineer  Frontend' href='javascript:void(0);' onclick='TPJNFView("2","734","2023-2024");'>Software Development Engineer  Frontend</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","734","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1150000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","734","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='230'>
        <cell><![CDATA[<a title='Onsurity' href='javascript:void(0);' onclick='TPComView("2023-2024","734");'>Onsurity</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","734");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","734");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Development Engineer I - Backend' href='javascript:void(0);' onclick='TPJNFView("1","734","2023-2024");'>Software Development Engineer I - Backend</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","734","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1150000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","734","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='231'>
        <cell><![CDATA[<a title='OPTYM' href='javascript:void(0);' onclick='TPComView("2023-2024","531");'>OPTYM</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","531");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","531");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer  Backend' href='javascript:void(0);' onclick='TPJNFView("2","531","2023-2024");'>Software Engineer  Backend</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","531","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2400000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","531","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[24-11-2023 22:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='232'>
        <cell><![CDATA[<a title='OPTYM' href='javascript:void(0);' onclick='TPComView("2023-2024","531");'>OPTYM</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","531");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","531");'></a>]]></cell>
        <cell><![CDATA[<a title='Full Stack Developer' href='javascript:void(0);' onclick='TPJNFView("6","531","2023-2024");'>Full Stack Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","531","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2400000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","531","6");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[24-11-2023 22:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='233'>
        <cell><![CDATA[<a title='OPTYM' href='javascript:void(0);' onclick='TPComView("2023-2024","531");'>OPTYM</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","531");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","531");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer - Frontend' href='javascript:void(0);' onclick='TPJNFView("5","531","2023-2024");'>Software Engineer - Frontend</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","531","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2400000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","531","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[24-11-2023 22:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='234'>
        <cell><![CDATA[<a title='OPTYM' href='javascript:void(0);' onclick='TPComView("2023-2024","531");'>OPTYM</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","531");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","531");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer  Backend - Java' href='javascript:void(0);' onclick='TPJNFView("3","531","2023-2024");'>Software Engineer  Backend - Java</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","531","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2400000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","531","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[24-11-2023 22:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='235'>
        <cell><![CDATA[<a title='OPTYM' href='javascript:void(0);' onclick='TPComView("2023-2024","531");'>OPTYM</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","531");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","531");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer  Node.JS' href='javascript:void(0);' onclick='TPJNFView("4","531","2023-2024");'>Software Engineer  Node.JS</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","531","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2400000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","531","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[24-11-2023 22:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='236'>
        <cell><![CDATA[<a title='ORMAE' href='javascript:void(0);' onclick='TPComView("2023-2024","195");'>ORMAE</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","195");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","195");'></a>]]></cell>
        <cell><![CDATA[<a title='Operations Research Scientist I' href='javascript:void(0);' onclick='TPJNFView("1","195","2023-2024");'>Operations Research Scientist I</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","195","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[If any joiner cannot stay with us for 2.5 years from his date of joining Rs 6 Lakhs penalty will have to be paid to ORMAE]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","195","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 01:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='237'>
        <cell><![CDATA[<a title='Paypal' href='javascript:void(0);' onclick='TPComView("2023-2024","35");'>Paypal</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","35");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","35");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Analyst' href='javascript:void(0);' onclick='TPJNFView("2","35","2023-2024");'>Data Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","35","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3440000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","35","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[06-10-2023 18:21]]></cell>
        <cell><![CDATA[07-10-2023 21:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='238'>
        <cell><![CDATA[<a title='Paypal' href='javascript:void(0);' onclick='TPComView("2023-2024","35");'>Paypal</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","35");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","35");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("1","35","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","35","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3440000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","35","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[06-10-2023 18:30]]></cell>
        <cell><![CDATA[07-10-2023 21:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='239'>
        <cell><![CDATA[<a title='People Interactive (I) Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","649");'>People Interactive (I) Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","649");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","649");'></a>]]></cell>
        <cell><![CDATA[<a title='Trainee Engineer' href='javascript:void(0);' onclick='TPJNFView("1","649","2023-2024");'>Trainee Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","649","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1300000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","649","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 18:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='240'>
        <cell><![CDATA[<a title='Perceptive Analytics Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","711");'>Perceptive Analytics Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","711");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","711");'></a>]]></cell>
        <cell><![CDATA[<a title='Analyst - Visual Analytics' href='javascript:void(0);' onclick='TPJNFView("1","711","2023-2024");'>Analyst - Visual Analytics</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","711","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1350000]]></cell>
        <cell><![CDATA[Yes - 18 Months]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","711","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 22:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='241'>
        <cell><![CDATA[<a title='Perceptive Analytics Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","711");'>Perceptive Analytics Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","711");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","711");'></a>]]></cell>
        <cell><![CDATA[<a title='Sales Consultant' href='javascript:void(0);' onclick='TPJNFView("2","711","2023-2024");'>Sales Consultant</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","711","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1350000]]></cell>
        <cell><![CDATA[Yes - 18 months]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","711","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 22:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='242'>
        <cell><![CDATA[<a title='Petronet LNG Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","571");'>Petronet LNG Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","571");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","571");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Engineer Trainee' href='javascript:void(0);' onclick='TPJNFView("1","571","2023-2024");'>Graduate Engineer Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","571","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1891000]]></cell>
        <cell><![CDATA[Yes, 2 lacs for 2 years]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","571","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[27-10-2023 00:00]]></cell>
        <cell><![CDATA[28-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='243'>
        <cell><![CDATA[<a title='Plutus Research Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","595");'>Plutus Research Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","595");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","595");'></a>]]></cell>
        <cell><![CDATA[<a title='Infrastructure Developer' href='javascript:void(0);' onclick='TPJNFView("2","595","2023-2024");'>Infrastructure Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","595","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[4950000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","595","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[19-10-2023 18:00]]></cell>
        <cell><![CDATA[21-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='244'>
        <cell><![CDATA[<a title='PTM Digital Connect Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","1227");'>PTM Digital Connect Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1227");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1227");'></a>]]></cell>
        <cell><![CDATA[<a title='AI Data Scientist' href='javascript:void(0);' onclick='TPJNFView("1","1227","2023-2024");'>AI Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1227","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[900000]]></cell>
        <cell><![CDATA[This will depend on a case-to-case basis.]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1227","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[07-03-2024 18:00]]></cell>
        <cell><![CDATA[08-03-2024 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='245'>
        <cell><![CDATA[<a title='QuantumstreetAi' href='javascript:void(0);' onclick='TPComView("2023-2024","1158");'>QuantumstreetAi</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1158");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1158");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Data Scientist' href='javascript:void(0);' onclick='TPJNFView("1","1158","2023-2024");'>Associate Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1158","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1300000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1158","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[30-01-2024 22:00]]></cell>
        <cell><![CDATA[31-01-2024 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='246'>
        <cell><![CDATA[<a title='QuantumstreetAi' href='javascript:void(0);' onclick='TPComView("2023-2024","1158");'>QuantumstreetAi</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1158");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1158");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate (Financial Machine Learning)' href='javascript:void(0);' onclick='TPJNFView("2","1158","2023-2024");'>Associate (Financial Machine Learning)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","1158","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1300000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1158","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[30-01-2024 22:00]]></cell>
        <cell><![CDATA[31-01-2024 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='247'>
        <cell><![CDATA[<a title='Quasistatics Inc. (Ixana.ai)' href='javascript:void(0);' onclick='TPComView("2023-2024","521");'>Quasistatics Inc. (Ixana.ai)</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","521");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","521");'></a>]]></cell>
        <cell><![CDATA[<a title='IC Design Engineer I (Analog/Digital)' href='javascript:void(0);' onclick='TPJNFView("4","521","2023-2024");'>IC Design Engineer I (Analog/Digital)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","521","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","521","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[17-10-2023 19:00]]></cell>
        <cell><![CDATA[19-10-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='248'>
        <cell><![CDATA[<a title='Quasistatics Inc. (Ixana.ai)' href='javascript:void(0);' onclick='TPComView("2023-2024","521");'>Quasistatics Inc. (Ixana.ai)</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","521");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","521");'></a>]]></cell>
        <cell><![CDATA[<a title='SoC Design Engineer I (Mixed-Signal)' href='javascript:void(0);' onclick='TPJNFView("3","521","2023-2024");'>SoC Design Engineer I (Mixed-Signal)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","521","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3700000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","521","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[17-10-2023 19:00]]></cell>
        <cell><![CDATA[19-10-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='249'>
        <cell><![CDATA[<a title='Quicksell' href='javascript:void(0);' onclick='TPComView("2023-2024","332");'>Quicksell</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","332");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","332");'></a>]]></cell>
        <cell><![CDATA[<a title='FRONTEND DEVELOPER' href='javascript:void(0);' onclick='TPJNFView("3","332","2023-2024");'>FRONTEND DEVELOPER</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","332","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2400000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","332","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 15:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='250'>
        <cell><![CDATA[<a title='Quicksell' href='javascript:void(0);' onclick='TPComView("2023-2024","332");'>Quicksell</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","332");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","332");'></a>]]></cell>
        <cell><![CDATA[<a title='ANDROID DEVELOPER' href='javascript:void(0);' onclick='TPJNFView("1","332","2023-2024");'>ANDROID DEVELOPER</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","332","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2400000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","332","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 15:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='251'>
        <cell><![CDATA[<a title='ReachIvy.com' href='javascript:void(0);' onclick='TPComView("2023-2024","1110");'>ReachIvy.com</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1110");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1110");'></a>]]></cell>
        <cell><![CDATA[<a title='Business Development- Full time' href='javascript:void(0);' onclick='TPJNFView("4","1110","2023-2024");'>Business Development- Full time</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","1110","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1110","4");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[29-01-2024 00:00]]></cell>
        <cell><![CDATA[31-01-2024 11:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='252'>
        <cell><![CDATA[<a title='ReachIvy.com' href='javascript:void(0);' onclick='TPComView("2023-2024","1110");'>ReachIvy.com</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1110");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1110");'></a>]]></cell>
        <cell><![CDATA[<a title='Digital Marketing & SEO' href='javascript:void(0);' onclick='TPJNFView("6","1110","2023-2024");'>Digital Marketing & SEO</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","1110","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1110","6");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[29-01-2024 00:00]]></cell>
        <cell><![CDATA[31-01-2024 11:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='253'>
        <cell><![CDATA[<a title='ReachIvy.com' href='javascript:void(0);' onclick='TPComView("2023-2024","1110");'>ReachIvy.com</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1110");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1110");'></a>]]></cell>
        <cell><![CDATA[<a title='Senior Web Developer' href='javascript:void(0);' onclick='TPJNFView("5","1110","2023-2024");'>Senior Web Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","1110","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1110","5");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[29-01-2024 00:00]]></cell>
        <cell><![CDATA[31-01-2024 11:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='254'>
        <cell><![CDATA[<a title='Reliance Industries Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","841");'>Reliance Industries Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","841");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","841");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Engineer Trainee (GET)' href='javascript:void(0);' onclick='TPJNFView("1","841","2023-2024");'>Graduate Engineer Trainee (GET)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","841","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[9]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","841","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-12-2023 20:00]]></cell>
        <cell><![CDATA[07-12-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='255'>
        <cell><![CDATA[<a title='Reliance Industries Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","841");'>Reliance Industries Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","841");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","841");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Engineer Trainee [GET]' href='javascript:void(0);' onclick='TPJNFView("2","841","2023-2024");'>Graduate Engineer Trainee [GET]</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","841","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[9]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","841","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[31-01-2024 19:40]]></cell>
        <cell><![CDATA[05-02-2024 17:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='256'>
        <cell><![CDATA[<a title='Reliance Jio 5G' href='javascript:void(0);' onclick='TPComView("2023-2024","928");'>Reliance Jio 5G</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","928");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","928");'></a>]]></cell>
        <cell><![CDATA[<a title='ECE Core' href='javascript:void(0);' onclick='TPJNFView("2","928","2023-2024");'>ECE Core</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","928","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1850000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","928","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 07:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='257'>
        <cell><![CDATA[<a title='Reliance Jio 5G' href='javascript:void(0);' onclick='TPComView("2023-2024","928");'>Reliance Jio 5G</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","928");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","928");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Developer' href='javascript:void(0);' onclick='TPJNFView("1","928","2023-2024");'>Software Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","928","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1850000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","928","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 07:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='258'>
        <cell><![CDATA[<a title='Samplytics Technologies Pvt. Ltd (Inito)' href='javascript:void(0);' onclick='TPComView("2023-2024","759");'>Samplytics Technologies Pvt. Ltd (Inito)</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","759");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","759");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("5","759","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","759","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2000000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","759","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 21:00]]></cell>
        <cell><![CDATA[29-11-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='259'>
        <cell><![CDATA[<a title='Samplytics Technologies Pvt. Ltd (Inito)' href='javascript:void(0);' onclick='TPComView("2023-2024","759");'>Samplytics Technologies Pvt. Ltd (Inito)</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","759");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","759");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Product Manager' href='javascript:void(0);' onclick='TPJNFView("4","759","2023-2024");'>Associate Product Manager</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","759","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2000000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","759","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 21:00]]></cell>
        <cell><![CDATA[29-11-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='260'>
        <cell><![CDATA[<a title='Samplytics Technologies Pvt. Ltd (Inito)' href='javascript:void(0);' onclick='TPComView("2023-2024","759");'>Samplytics Technologies Pvt. Ltd (Inito)</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","759");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","759");'></a>]]></cell>
        <cell><![CDATA[<a title='Electronics Engineer' href='javascript:void(0);' onclick='TPJNFView("2","759","2023-2024");'>Electronics Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","759","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2000000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","759","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 21:00]]></cell>
        <cell><![CDATA[29-11-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='261'>
        <cell><![CDATA[<a title='SEDEMAC Mechatronics Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","421");'>SEDEMAC Mechatronics Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","421");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","421");'></a>]]></cell>
        <cell><![CDATA[<a title='Engineer, Test Automation' href='javascript:void(0);' onclick='TPJNFView("2","421","2023-2024");'>Engineer, Test Automation</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","421","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","421","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[28-10-2023 19:30]]></cell>
        <cell><![CDATA[30-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='262'>
        <cell><![CDATA[<a title='Shakti Pumps (India) Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","901");'>Shakti Pumps (India) Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","901");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","901");'></a>]]></cell>
        <cell><![CDATA[<a title='Quality - M.Tech - Assistant Manager, PhD. - Deputy Manager' href='javascript:void(0);' onclick='TPJNFView("9","901","2023-2024");'>Quality - M.Tech - Assistant Manager, PhD. - Deputy Manager</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("9","901","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","901","9");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[12-12-2023 10:03]]></cell>
        <cell><![CDATA[12-12-2023 15:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='263'>
        <cell><![CDATA[<a title='Shakti Pumps (India) Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","901");'>Shakti Pumps (India) Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","901");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","901");'></a>]]></cell>
        <cell><![CDATA[<a title='Manager - EV (R&D)' href='javascript:void(0);' onclick='TPJNFView("4","901","2023-2024");'>Manager - EV (R&D)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","901","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[900000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","901","4");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 06:00]]></cell>
        <cell><![CDATA[12-12-2023 08:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='264'>
        <cell><![CDATA[<a title='Shakti Pumps (India) Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","901");'>Shakti Pumps (India) Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","901");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","901");'></a>]]></cell>
        <cell><![CDATA[<a title='Manager - Electronics and Control (R&D)' href='javascript:void(0);' onclick='TPJNFView("2","901","2023-2024");'>Manager - Electronics and Control (R&D)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","901","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[900000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","901","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 06:00]]></cell>
        <cell><![CDATA[12-12-2023 08:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='265'>
        <cell><![CDATA[<a title='Shakti Pumps (India) Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","901");'>Shakti Pumps (India) Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","901");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","901");'></a>]]></cell>
        <cell><![CDATA[<a title='PURCHASE -M.Tech - Assistant Manager, PhD. - Deputy Manager' href='javascript:void(0);' onclick='TPJNFView("8","901","2023-2024");'>PURCHASE -M.Tech - Assistant Manager, PhD. - Deputy Manager</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("8","901","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","901","8");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[12-12-2023 10:00]]></cell>
        <cell><![CDATA[12-12-2023 15:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='266'>
        <cell><![CDATA[<a title='Signzy' href='javascript:void(0);' onclick='TPComView("2023-2024","930");'>Signzy</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","930");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","930");'></a>]]></cell>
        <cell><![CDATA[<a title='Site Reliability Engineer -1' href='javascript:void(0);' onclick='TPJNFView("1","930","2023-2024");'>Site Reliability Engineer -1</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","930","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","930","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[02-12-2023 18:00]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='267'>
        <cell><![CDATA[<a title='SIM ADVISORY, INC' href='javascript:void(0);' onclick='TPComView("2023-2024","1000");'>SIM ADVISORY, INC</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1000");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1000");'></a>]]></cell>
        <cell><![CDATA[<a title='Business Analyst' href='javascript:void(0);' onclick='TPJNFView("1","1000","2023-2024");'>Business Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1000","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1037900]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1000","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[07-02-2024 17:40]]></cell>
        <cell><![CDATA[08-02-2024 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='268'>
        <cell><![CDATA[<a title='Simplability Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","1441");'>Simplability Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1441");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1441");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Field Innovation Architect' href='javascript:void(0);' onclick='TPJNFView("1","1441","2023-2024");'>Field Innovation Architect</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1441","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[840000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1441","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[23-04-2024 18:00]]></cell>
        <cell><![CDATA[24-04-2024 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='269'>
        <cell><![CDATA[<a title='Simplability Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","1441");'>Simplability Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1441");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1441");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Tech Sorcerer' href='javascript:void(0);' onclick='TPJNFView("2","1441","2023-2024");'>Tech Sorcerer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","1441","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[840000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1441","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[23-04-2024 18:00]]></cell>
        <cell><![CDATA[24-04-2024 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='270'>
        <cell><![CDATA[<a title='Singularity Dynamics' href='javascript:void(0);' onclick='TPComView("2023-2024","745");'>Singularity Dynamics</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","745");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","745");'></a>]]></cell>
        <cell><![CDATA[<a title='Verification Engineer (R&D)' href='javascript:void(0);' onclick='TPJNFView("1","745","2023-2024");'>Verification Engineer (R&D)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","745","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1900000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","745","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 21:00]]></cell>
        <cell><![CDATA[29-11-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='271'>
        <cell><![CDATA[<a title='Skiify Solutions Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","609");'>Skiify Solutions Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","609");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","609");'></a>]]></cell>
        <cell><![CDATA[<a title='Product Manager' href='javascript:void(0);' onclick='TPJNFView("1","609","2023-2024");'>Product Manager</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","609","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[4228000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","609","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 14:00]]></cell>
        <cell><![CDATA[29-11-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='272'>
        <cell><![CDATA[<a title='Skyroot' href='javascript:void(0);' onclick='TPComView("2023-2024","850");'>Skyroot</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='Flight Mechanics' href='javascript:void(0);' onclick='TPJNFView("8","850","2023-2024");'>Flight Mechanics</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("8","850","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","850","8");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 19:02]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='273'>
        <cell><![CDATA[<a title='Skyroot' href='javascript:void(0);' onclick='TPComView("2023-2024","850");'>Skyroot</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='Composite Manufacturing' href='javascript:void(0);' onclick='TPJNFView("12","850","2023-2024");'>Composite Manufacturing</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("12","850","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","850","12");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 19:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='274'>
        <cell><![CDATA[<a title='Skyroot' href='javascript:void(0);' onclick='TPComView("2023-2024","850");'>Skyroot</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='RF/ Antennae/ MW' href='javascript:void(0);' onclick='TPJNFView("11","850","2023-2024");'>RF/ Antennae/ MW</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("11","850","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","850","11");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 19:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='275'>
        <cell><![CDATA[<a title='Skyroot' href='javascript:void(0);' onclick='TPComView("2023-2024","850");'>Skyroot</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='Avionics  Hardware/ Software/ Integration' href='javascript:void(0);' onclick='TPJNFView("10","850","2023-2024");'>Avionics  Hardware/ Software/ Integration</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("10","850","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","850","10");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 19:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='276'>
        <cell><![CDATA[<a title='Skyroot' href='javascript:void(0);' onclick='TPComView("2023-2024","850");'>Skyroot</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='Solid Stages & Structures' href='javascript:void(0);' onclick='TPJNFView("1","850","2023-2024");'>Solid Stages & Structures</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","850","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[500000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","850","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 19:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='277'>
        <cell><![CDATA[<a title='Skyroot' href='javascript:void(0);' onclick='TPComView("2023-2024","850");'>Skyroot</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='Guidance, Navigation & Control' href='javascript:void(0);' onclick='TPJNFView("9","850","2023-2024");'>Guidance, Navigation & Control</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("9","850","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","850","9");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 19:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='278'>
        <cell><![CDATA[<a title='Skyroot' href='javascript:void(0);' onclick='TPComView("2023-2024","850");'>Skyroot</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='Mission Configuration' href='javascript:void(0);' onclick='TPJNFView("7","850","2023-2024");'>Mission Configuration</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("7","850","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","850","7");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 19:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='279'>
        <cell><![CDATA[<a title='Skyroot' href='javascript:void(0);' onclick='TPComView("2023-2024","850");'>Skyroot</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='Test Fixtures & Mechanisms' href='javascript:void(0);' onclick='TPJNFView("6","850","2023-2024");'>Test Fixtures & Mechanisms</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","850","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[500000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","850","6");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 19:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='280'>
        <cell><![CDATA[<a title='Skyroot' href='javascript:void(0);' onclick='TPComView("2023-2024","850");'>Skyroot</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='Integration' href='javascript:void(0);' onclick='TPJNFView("5","850","2023-2024");'>Integration</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","850","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[500000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","850","5");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 19:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='281'>
        <cell><![CDATA[<a title='Skyroot' href='javascript:void(0);' onclick='TPComView("2023-2024","850");'>Skyroot</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='Liquid Propulsion' href='javascript:void(0);' onclick='TPJNFView("3","850","2023-2024");'>Liquid Propulsion</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","850","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[500000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","850","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 19:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='282'>
        <cell><![CDATA[<a title='Skyroot' href='javascript:void(0);' onclick='TPComView("2023-2024","850");'>Skyroot</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='Cryo Engines' href='javascript:void(0);' onclick='TPJNFView("4","850","2023-2024");'>Cryo Engines</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","850","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[500000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","850","4");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 19:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='283'>
        <cell><![CDATA[<a title='Skyroot' href='javascript:void(0);' onclick='TPComView("2023-2024","850");'>Skyroot</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","850");'></a>]]></cell>
        <cell><![CDATA[<a title='Solid Propulsion' href='javascript:void(0);' onclick='TPJNFView("2","850","2023-2024");'>Solid Propulsion</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","850","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[500000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","850","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 19:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='284'>
        <cell><![CDATA[<a title='SMFG India Credit Company Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","409");'>SMFG India Credit Company Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","409");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","409");'></a>]]></cell>
        <cell><![CDATA[<a title='Management Trainee  Project Management Office' href='javascript:void(0);' onclick='TPJNFView("5","409","2023-2024");'>Management Trainee  Project Management Office</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","409","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","409","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[07-12-2023 15:00]]></cell>
        <cell><![CDATA[07-12-2023 22:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='285'>
        <cell><![CDATA[<a title='SMFG India Credit Company Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","409");'>SMFG India Credit Company Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","409");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","409");'></a>]]></cell>
        <cell><![CDATA[<a title='Management Trainee  Development' href='javascript:void(0);' onclick='TPJNFView("3","409","2023-2024");'>Management Trainee  Development</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","409","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","409","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[05-12-2023 02:00]]></cell>
        <cell><![CDATA[05-12-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='286'>
        <cell><![CDATA[<a title='SMFG India Credit Company Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","409");'>SMFG India Credit Company Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","409");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","409");'></a>]]></cell>
        <cell><![CDATA[<a title='Management Trainee Application (BSG)' href='javascript:void(0);' onclick='TPJNFView("6","409","2023-2024");'>Management Trainee Application (BSG)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","409","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","409","6");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[07-12-2023 15:00]]></cell>
        <cell><![CDATA[07-12-2023 22:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='287'>
        <cell><![CDATA[<a title='SparkCognition India Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","1615");'>SparkCognition India Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1615");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1615");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer I' href='javascript:void(0);' onclick='TPJNFView("1","1615","2023-2024");'>Software Engineer I</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1615","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1615","1");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[18-04-2024 12:05]]></cell>
        <cell><![CDATA[19-04-2024 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='288'>
        <cell><![CDATA[<a title='SPECTRUM Techno Consultants Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","108");'>SPECTRUM Techno Consultants Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","108");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","108");'></a>]]></cell>
        <cell><![CDATA[<a title='Trainee Design Engineer - Structures' href='javascript:void(0);' onclick='TPJNFView("1","108","2023-2024");'>Trainee Design Engineer - Structures</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","108","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","108","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[05-12-2023 16:00]]></cell>
        <cell><![CDATA[06-12-2023 10:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='289'>
        <cell><![CDATA[<a title='SPECTRUM Techno Consultants Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","108");'>SPECTRUM Techno Consultants Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","108");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","108");'></a>]]></cell>
        <cell><![CDATA[<a title='Trainee Engineer' href='javascript:void(0);' onclick='TPJNFView("3","108","2023-2024");'>Trainee Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","108","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[360000]]></cell>
        <cell><![CDATA[2]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","108","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[05-12-2023 16:00]]></cell>
        <cell><![CDATA[06-12-2023 10:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='290'>
        <cell><![CDATA[<a title='SPECTRUM Techno Consultants Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","108");'>SPECTRUM Techno Consultants Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","108");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","108");'></a>]]></cell>
        <cell><![CDATA[<a title='Trainee Design Engineer - Transportation' href='javascript:void(0);' onclick='TPJNFView("2","108","2023-2024");'>Trainee Design Engineer - Transportation</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","108","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","108","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[05-12-2023 16:00]]></cell>
        <cell><![CDATA[06-12-2023 10:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='291'>
        <cell><![CDATA[<a title='SRF Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","269");'>SRF Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","269");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","269");'></a>]]></cell>
        <cell><![CDATA[<a title='Design Trainee' href='javascript:void(0);' onclick='TPJNFView("1","269","2023-2024");'>Design Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","269","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","269","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='292'>
        <cell><![CDATA[<a title='Startoon Labs Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","193");'>Startoon Labs Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","193");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","193");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Research Engineer' href='javascript:void(0);' onclick='TPJNFView("3","193","2023-2024");'>Research Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","193","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[550000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","193","3");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[07-12-2023 19:00]]></cell>
        <cell><![CDATA[08-12-2023 17:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='293'>
        <cell><![CDATA[<a title='straive' href='javascript:void(0);' onclick='TPComView("2023-2024","675");'>straive</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","675");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","675");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Analyst' href='javascript:void(0);' onclick='TPJNFView("1","675","2023-2024");'>Data Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","675","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","675","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[04-12-2023 14:00]]></cell>
        <cell><![CDATA[22-02-2024 17:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='294'>
        <cell><![CDATA[<a title='Suki.ai' href='javascript:void(0);' onclick='TPComView("2023-2024","447");'>Suki.ai</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","447");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","447");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer I' href='javascript:void(0);' onclick='TPJNFView("1","447","2023-2024");'>Software Engineer I</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","447","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2970200]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","447","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 16:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='295'>
        <cell><![CDATA[<a title='SuperAGI' href='javascript:void(0);' onclick='TPComView("2023-2024","871");'>SuperAGI</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","871");'></a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","871");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='AI Researcher' href='javascript:void(0);' onclick='TPJNFView("2","871","2023-2024");'>AI Researcher</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","871","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3400000]]></cell>
        <cell><![CDATA[none]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","871","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 21:00]]></cell>
        <cell><![CDATA[29-11-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='296'>
        <cell><![CDATA[<a title='SuperAGI' href='javascript:void(0);' onclick='TPComView("2023-2024","871");'>SuperAGI</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","871");'></a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","871");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Associate Product Manager' href='javascript:void(0);' onclick='TPJNFView("6","871","2023-2024");'>Associate Product Manager</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","871","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2000000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","871","6");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 21:00]]></cell>
        <cell><![CDATA[29-11-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='297'>
        <cell><![CDATA[<a title='SuperAGI' href='javascript:void(0);' onclick='TPComView("2023-2024","871");'>SuperAGI</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","871");'></a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","871");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='ML Engineer' href='javascript:void(0);' onclick='TPJNFView("4","871","2023-2024");'>ML Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","871","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2800000]]></cell>
        <cell><![CDATA[none]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","871","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 21:00]]></cell>
        <cell><![CDATA[29-11-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='298'>
        <cell><![CDATA[<a title='Svaya Robotics Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","667");'>Svaya Robotics Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","667");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","667");'></a>]]></cell>
        <cell><![CDATA[<a title='Embedded Developer' href='javascript:void(0);' onclick='TPJNFView("4","667","2023-2024");'>Embedded Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","667","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[800000]]></cell>
        <cell><![CDATA[2 years]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","667","4");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[09-12-2023 20:00]]></cell>
        <cell><![CDATA[10-12-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='299'>
        <cell><![CDATA[<a title='Svaya Robotics Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","667");'>Svaya Robotics Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","667");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","667");'></a>]]></cell>
        <cell><![CDATA[<a title='Robotics Motion Planning' href='javascript:void(0);' onclick='TPJNFView("2","667","2023-2024");'>Robotics Motion Planning</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","667","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1100000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","667","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[09-12-2023 20:00]]></cell>
        <cell><![CDATA[10-12-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='300'>
        <cell><![CDATA[<a title='Svaya Robotics Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","667");'>Svaya Robotics Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","667");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","667");'></a>]]></cell>
        <cell><![CDATA[<a title='Biomechanics Design Engineer' href='javascript:void(0);' onclick='TPJNFView("3","667","2023-2024");'>Biomechanics Design Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","667","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","667","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[09-12-2023 20:00]]></cell>
        <cell><![CDATA[10-12-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='301'>
        <cell><![CDATA[<a title='Svaya Robotics Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","667");'>Svaya Robotics Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","667");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","667");'></a>]]></cell>
        <cell><![CDATA[<a title='Robotics Control System' href='javascript:void(0);' onclick='TPJNFView("1","667","2023-2024");'>Robotics Control System</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","667","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1100000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","667","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[09-12-2023 20:00]]></cell>
        <cell><![CDATA[10-12-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='302'>
        <cell><![CDATA[<a title='Taiwan Semiconductor Manufacturing Company' href='javascript:void(0);' onclick='TPComView("2023-2024","345");'>Taiwan Semiconductor Manufacturing Company</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","345");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","345");'></a>]]></cell>
        <cell><![CDATA[<a title='Machine Learning Engineer' href='javascript:void(0);' onclick='TPJNFView("6","345","2023-2024");'>Machine Learning Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","345","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[71064]]></cell>
        <cell><![CDATA[2 years]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","345","6");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[16-10-2023 19:30]]></cell>
        <cell><![CDATA[20-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='303'>
        <cell><![CDATA[<a title='Taiwan Semiconductor Manufacturing Company' href='javascript:void(0);' onclick='TPComView("2023-2024","345");'>Taiwan Semiconductor Manufacturing Company</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","345");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","345");'></a>]]></cell>
        <cell><![CDATA[<a title='Analog/Mixed-mode Engineer' href='javascript:void(0);' onclick='TPJNFView("4","345","2023-2024");'>Analog/Mixed-mode Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","345","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[71064]]></cell>
        <cell><![CDATA[2 years]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","345","4");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[16-10-2023 19:50]]></cell>
        <cell><![CDATA[20-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='304'>
        <cell><![CDATA[<a title='Taiwan Semiconductor Manufacturing Company' href='javascript:void(0);' onclick='TPComView("2023-2024","345");'>Taiwan Semiconductor Manufacturing Company</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","345");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","345");'></a>]]></cell>
        <cell><![CDATA[<a title='STDED Engineer' href='javascript:void(0);' onclick='TPJNFView("10","345","2023-2024");'>STDED Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("10","345","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[71064]]></cell>
        <cell><![CDATA[2 years]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","345","10");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[16-10-2023 19:50]]></cell>
        <cell><![CDATA[20-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='305'>
        <cell><![CDATA[<a title='Taiwan Semiconductor Manufacturing Company' href='javascript:void(0);' onclick='TPComView("2023-2024","345");'>Taiwan Semiconductor Manufacturing Company</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","345");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","345");'></a>]]></cell>
        <cell><![CDATA[<a title='IT Infrastructure Engineer' href='javascript:void(0);' onclick='TPJNFView("11","345","2023-2024");'>IT Infrastructure Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("11","345","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[71064]]></cell>
        <cell><![CDATA[2 years]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","345","11");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[16-10-2023 17:55]]></cell>
        <cell><![CDATA[20-10-2023 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='306'>
        <cell><![CDATA[<a title='TATA AIG GENERAL INSURANCE COMPANY LIMITED' href='javascript:void(0);' onclick='TPComView("2023-2024","61");'>TATA AIG GENERAL INSURANCE COMPANY LIMITED</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","61");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","61");'></a>]]></cell>
        <cell><![CDATA[<a title='Auto Claims' href='javascript:void(0);' onclick='TPJNFView("6","61","2023-2024");'>Auto Claims</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","61","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1950000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","61","6");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 15:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='307'>
        <cell><![CDATA[<a title='TATA AIG GENERAL INSURANCE COMPANY LIMITED' href='javascript:void(0);' onclick='TPComView("2023-2024","61");'>TATA AIG GENERAL INSURANCE COMPANY LIMITED</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","61");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","61");'></a>]]></cell>
        <cell><![CDATA[<a title='Auto Claims - Technical Coach' href='javascript:void(0);' onclick='TPJNFView("5","61","2023-2024");'>Auto Claims - Technical Coach</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","61","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1950000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","61","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 15:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='308'>
        <cell><![CDATA[<a title='TATA AIG GENERAL INSURANCE COMPANY LIMITED' href='javascript:void(0);' onclick='TPComView("2023-2024","61");'>TATA AIG GENERAL INSURANCE COMPANY LIMITED</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","61");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","61");'></a>]]></cell>
        <cell><![CDATA[<a title='Underwriter' href='javascript:void(0);' onclick='TPJNFView("7","61","2023-2024");'>Underwriter</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("7","61","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1950000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","61","7");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 15:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='309'>
        <cell><![CDATA[<a title='TATA iQ' href='javascript:void(0);' onclick='TPComView("2023-2024","1208");'>TATA iQ</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1208");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1208");'></a>]]></cell>
        <cell><![CDATA[<a title='Analyst  Analytics Service' href='javascript:void(0);' onclick='TPJNFView("1","1208","2023-2024");'>Analyst  Analytics Service</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1208","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1208","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[15-02-2024 11:00]]></cell>
        <cell><![CDATA[16-02-2024 18:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='310'>
        <cell><![CDATA[<a title='TCS (TATA Consultancy Services)' href='javascript:void(0);' onclick='TPComView("2023-2024","1026");'>TCS (TATA Consultancy Services)</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1026");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1026");'></a>]]></cell>
        <cell><![CDATA[<a title='< PFA >' href='javascript:void(0);' onclick='TPJNFView("1","1026","2023-2024");'>< PFA ></a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1026","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1150000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1026","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[14-12-2023 21:00]]></cell>
        <cell><![CDATA[15-12-2023 15:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='311'>
        <cell><![CDATA[<a title='Telecommunications Consultant India lImited' href='javascript:void(0);' onclick='TPComView("2023-2024","1003");'>Telecommunications Consultant India lImited</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1003");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1003");'></a>]]></cell>
        <cell><![CDATA[<a title='Executive Trainee' href='javascript:void(0);' onclick='TPJNFView("1","1003","2023-2024");'>Executive Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1003","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[YES 3 YEARS]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1003","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[14-12-2023 16:00]]></cell>
        <cell><![CDATA[18-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='312'>
        <cell><![CDATA[<a title='Tescra Software Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","383");'>Tescra Software Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","383");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","383");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Developer' href='javascript:void(0);' onclick='TPJNFView("1","383","2023-2024");'>Software Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","383","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[2 yrs - 6lacs]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","383","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='313'>
        <cell><![CDATA[<a title='TETRA PAK INDIA PVT. LTD.' href='javascript:void(0);' onclick='TPComView("2023-2024","529");'>TETRA PAK INDIA PVT. LTD.</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","529");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","529");'></a>]]></cell>
        <cell><![CDATA[<a title='Future Talent Program' href='javascript:void(0);' onclick='TPJNFView("1","529","2023-2024");'>Future Talent Program</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","529","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[650000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","529","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[05-12-2023 16:00]]></cell>
        <cell><![CDATA[06-12-2023 10:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='314'>
        <cell><![CDATA[<a title='The eCEOs Sdn Bhd' href='javascript:void(0);' onclick='TPComView("2023-2024","884");'>The eCEOs Sdn Bhd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","884");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","884");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Scientist' href='javascript:void(0);' onclick='TPJNFView("1","884","2023-2024");'>Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","884","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[100000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","884","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 17:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='315'>
        <cell><![CDATA[<a title='The eCEOs Sdn Bhd' href='javascript:void(0);' onclick='TPComView("2023-2024","884");'>The eCEOs Sdn Bhd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","884");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","884");'></a>]]></cell>
        <cell><![CDATA[<a title='Full Stack Engineer' href='javascript:void(0);' onclick='TPJNFView("2","884","2023-2024");'>Full Stack Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","884","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[100000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","884","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 17:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='316'>
        <cell><![CDATA[<a title='ThoughtSpot' href='javascript:void(0);' onclick='TPComView("2023-2024","310");'>ThoughtSpot</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","310");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","310");'></a>]]></cell>
        <cell><![CDATA[<a title='Member of Technical Staff' href='javascript:void(0);' onclick='TPJNFView("2","310","2023-2024");'>Member of Technical Staff</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","310","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2759630]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","310","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[21-11-2023 06:00]]></cell>
        <cell><![CDATA[21-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='317'>
        <cell><![CDATA[<a title='TPF Technologies' href='javascript:void(0);' onclick='TPComView("2023-2024","586");'>TPF Technologies</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","586");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","586");'></a>]]></cell>
        <cell><![CDATA[<a title='Python Developer' href='javascript:void(0);' onclick='TPJNFView("2","586","2023-2024");'>Python Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","586","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[YES]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","586","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-12-2023 13:00]]></cell>
        <cell><![CDATA[07-12-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='318'>
        <cell><![CDATA[<a title='TruckX Technologies Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","419");'>TruckX Technologies Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","419");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","419");'></a>]]></cell>
        <cell><![CDATA[<a title='Backend Engineer' href='javascript:void(0);' onclick='TPJNFView("3","419","2023-2024");'>Backend Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","419","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","419","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 06:00]]></cell>
        <cell><![CDATA[03-12-2023 23:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='319'>
        <cell><![CDATA[<a title='TruckX Technologies Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","419");'>TruckX Technologies Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","419");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","419");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("1","419","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","419","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1600000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","419","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 06:00]]></cell>
        <cell><![CDATA[03-12-2023 23:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='320'>
        <cell><![CDATA[<a title='TruckX Technologies Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","419");'>TruckX Technologies Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","419");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","419");'></a>]]></cell>
        <cell><![CDATA[<a title='AI/ML Vision Engineer' href='javascript:void(0);' onclick='TPJNFView("4","419","2023-2024");'>AI/ML Vision Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","419","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","419","4");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 06:00]]></cell>
        <cell><![CDATA[03-12-2023 23:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='321'>
        <cell><![CDATA[<a title='Turing Global India Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","1539");'>Turing Global India Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1539");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1539");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Scientist | Software Engineer - LLM Training' href='javascript:void(0);' onclick='TPJNFView("1","1539","2023-2024");'>Data Scientist | Software Engineer - LLM Training</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1539","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1539","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[14-04-2024 16:00]]></cell>
        <cell><![CDATA[15-04-2024 17:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='322'>
        <cell><![CDATA[<a title='UltraTech Cement Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","844");'>UltraTech Cement Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","844");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","844");'></a>]]></cell>
        <cell><![CDATA[<a title='Assistant Manager' href='javascript:void(0);' onclick='TPJNFView("1","844","2023-2024");'>Assistant Manager</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","844","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[9.9]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","844","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='323'>
        <cell><![CDATA[<a title='Unistring Tech Solutions (UTS)' href='javascript:void(0);' onclick='TPComView("2023-2024","550");'>Unistring Tech Solutions (UTS)</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","550");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","550");'></a>]]></cell>
        <cell><![CDATA[<a title='Staff Engineer / Application Engineer in Embedded Hardware' href='javascript:void(0);' onclick='TPJNFView("5","550","2023-2024");'>Staff Engineer / Application Engineer in Embedded Hardware</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","550","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[24 months minimum service agreement]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","550","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 03:00]]></cell>
        <cell><![CDATA[03-12-2023 23:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='324'>
        <cell><![CDATA[<a title='Unistring Tech Solutions (UTS)' href='javascript:void(0);' onclick='TPComView("2023-2024","550");'>Unistring Tech Solutions (UTS)</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","550");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","550");'></a>]]></cell>
        <cell><![CDATA[<a title='Staff Engineer / Application Engineer in DSP' href='javascript:void(0);' onclick='TPJNFView("6","550","2023-2024");'>Staff Engineer / Application Engineer in DSP</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","550","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[24 months minimum service agreement]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","550","6");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 06:00]]></cell>
        <cell><![CDATA[03-12-2023 23:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='325'>
        <cell><![CDATA[<a title='Unistring Tech Solutions (UTS)' href='javascript:void(0);' onclick='TPComView("2023-2024","550");'>Unistring Tech Solutions (UTS)</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","550");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","550");'></a>]]></cell>
        <cell><![CDATA[<a title='Staff Engineer / Application Engineer in VLSI' href='javascript:void(0);' onclick='TPJNFView("7","550","2023-2024");'>Staff Engineer / Application Engineer in VLSI</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("7","550","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[24 months minimum service agreement]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","550","7");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 06:00]]></cell>
        <cell><![CDATA[03-12-2023 23:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='326'>
        <cell><![CDATA[<a title='Unistring Tech Solutions (UTS)' href='javascript:void(0);' onclick='TPComView("2023-2024","550");'>Unistring Tech Solutions (UTS)</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","550");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","550");'></a>]]></cell>
        <cell><![CDATA[<a title='Staff Engineer / Application Engineer in Embedded Software' href='javascript:void(0);' onclick='TPJNFView("8","550","2023-2024");'>Staff Engineer / Application Engineer in Embedded Software</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("8","550","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[24 months minimum service agreement]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","550","8");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 06:00]]></cell>
        <cell><![CDATA[03-12-2023 23:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='327'>
        <cell><![CDATA[<a title='Varroc Engineering Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","508");'>Varroc Engineering Limited</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","508");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","508");'></a>]]></cell>
        <cell><![CDATA[<a title='PGET' href='javascript:void(0);' onclick='TPJNFView("2","508","2023-2024");'>PGET</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","508","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1300000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","508","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 06:00]]></cell>
        <cell><![CDATA[03-12-2023 23:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='328'>
        <cell><![CDATA[<a title='Varroc Engineering Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","508");'>Varroc Engineering Limited</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","508");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","508");'></a>]]></cell>
        <cell><![CDATA[<a title='PGET' href='javascript:void(0);' onclick='TPJNFView("1","508","2023-2024");'>PGET</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","508","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1300000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","508","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 06:00]]></cell>
        <cell><![CDATA[03-12-2023 23:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='329'>
        <cell><![CDATA[<a title='V-GUARD' href='javascript:void(0);' onclick='TPComView("2023-2024","696");'>V-GUARD</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","696");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","696");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Engineer Trainee' href='javascript:void(0);' onclick='TPJNFView("1","696","2023-2024");'>Graduate Engineer Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","696","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","696","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[21-11-2023 06:00]]></cell>
        <cell><![CDATA[21-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='330'>
        <cell><![CDATA[<a title='WEBSTAFF' href='javascript:void(0);' onclick='TPComView("2023-2024","789");'>WEBSTAFF</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","789");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","789");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("1","789","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","789","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[5000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","789","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[14-11-2023 00:30]]></cell>
        <cell><![CDATA[15-11-2023 23:59]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='331'>
        <cell><![CDATA[<a title='WinZO Games' href='javascript:void(0);' onclick='TPComView("2023-2024","233");'>WinZO Games</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","233");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","233");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Developer' href='javascript:void(0);' onclick='TPJNFView("3","233","2023-2024");'>Software Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","233","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2700000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","233","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[25-11-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='332'>
        <cell><![CDATA[<a title='Wisetech Global' href='javascript:void(0);' onclick='TPComView("2023-2024","920");'>Wisetech Global</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","920");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","920");'></a>]]></cell>
        <cell><![CDATA[<a title='ASSOCIATE SOFTWARE ENGINEER' href='javascript:void(0);' onclick='TPJNFView("1","920","2023-2024");'>ASSOCIATE SOFTWARE ENGINEER</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","920","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","920","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='333'>
        <cell><![CDATA[<a title='WSP' href='javascript:void(0);' onclick='TPComView("2023-2024","605");'>WSP</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","605");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","605");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Engineer-Transport' href='javascript:void(0);' onclick='TPJNFView("3","605","2023-2024");'>Graduate Engineer-Transport</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","605","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[650000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","605","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 20:00]]></cell>
        <cell><![CDATA[05-12-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='334'>
        <cell><![CDATA[<a title='WSP' href='javascript:void(0);' onclick='TPComView("2023-2024","605");'>WSP</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","605");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","605");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Cultural Heritage & Archaeology' href='javascript:void(0);' onclick='TPJNFView("2","605","2023-2024");'>Graduate Cultural Heritage & Archaeology</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","605","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[650000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","605","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 20:00]]></cell>
        <cell><![CDATA[05-12-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='335'>
        <cell><![CDATA[<a title='WSP' href='javascript:void(0);' onclick='TPComView("2023-2024","605");'>WSP</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","605");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","605");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Engineer- Highways' href='javascript:void(0);' onclick='TPJNFView("4","605","2023-2024");'>Graduate Engineer- Highways</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","605","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[650000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","605","4");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 20:00]]></cell>
        <cell><![CDATA[05-12-2023 12:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='336'>
        <cell><![CDATA[<a title='WSP' href='javascript:void(0);' onclick='TPComView("2023-2024","605");'>WSP</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","605");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","605");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Engineer- Geotechnical' href='javascript:void(0);' onclick='TPJNFView("1","605","2023-2024");'>Graduate Engineer- Geotechnical</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","605","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[650000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","605","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 14:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='337'>
        <cell><![CDATA[<a title='Xalts' href='javascript:void(0);' onclick='TPComView("2023-2024","578");'>Xalts</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","578");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","578");'></a>]]></cell>
        <cell><![CDATA[<a title='Blockchain Engineer' href='javascript:void(0);' onclick='TPJNFView("3","578","2023-2024");'>Blockchain Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","578","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3000000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","578","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 16:00]]></cell>
        <cell><![CDATA[]]></cell>
    </row>
    <row id='338'>
        <cell><![CDATA[<a title='Bert Labs Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","998");'>Bert Labs Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","998");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","998");'></a>]]></cell>
        <cell><![CDATA[<a title='Research Engineer - Embedded Hardware' href='javascript:void(0);' onclick='TPJNFView("4","998","2023-2024");'>Research Engineer - Embedded Hardware</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","998","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","998","4");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[11-01-2024 12:00]]></cell>
        <cell><![CDATA[13-01-2024 23:59]]></cell>
        <cell><![CDATA[29-01-2024 00:00]]></cell>
    </row>
    <row id='339'>
        <cell><![CDATA[<a title='Bert Labs Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","998");'>Bert Labs Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","998");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","998");'></a>]]></cell>
        <cell><![CDATA[<a title='Research Engineer  Frontend Developer' href='javascript:void(0);' onclick='TPJNFView("5","998","2023-2024");'>Research Engineer  Frontend Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","998","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","998","5");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[11-01-2024 11:00]]></cell>
        <cell><![CDATA[13-01-2024 23:59]]></cell>
        <cell><![CDATA[29-01-2024 00:00]]></cell>
    </row>
    <row id='340'>
        <cell><![CDATA[<a title='Intellimation.ai' href='javascript:void(0);' onclick='TPComView("2023-2024","1096");'>Intellimation.ai</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1096");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1096");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer - I' href='javascript:void(0);' onclick='TPJNFView("1","1096","2023-2024");'>Software Engineer - I</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1096","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[8,00,000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1096","1");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[09-01-2024 13:00]]></cell>
        <cell><![CDATA[10-01-2024 23:59]]></cell>
        <cell><![CDATA[29-01-2024 00:00]]></cell>
    </row>
    <row id='341'>
        <cell><![CDATA[<a title='DIGIT INSURANCE' href='javascript:void(0);' onclick='TPComView("2023-2024","475");'>DIGIT INSURANCE</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","475");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","475");'></a>]]></cell>
        <cell><![CDATA[<a title='Engineering Trainee' href='javascript:void(0);' onclick='TPJNFView("1","475","2023-2024");'>Engineering Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","475","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[900000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","475","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[06-12-2023 16:00]]></cell>
        <cell><![CDATA[07-12-2023 18:00]]></cell>
        <cell><![CDATA[28-02-2024 00:00]]></cell>
    </row>
    <row id='342'>
        <cell><![CDATA[<a title='PragmaticPlay India Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","495");'>PragmaticPlay India Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","495");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","495");'></a>]]></cell>
        <cell><![CDATA[<a title='Game Mathematician' href='javascript:void(0);' onclick='TPJNFView("1","495","2023-2024");'>Game Mathematician</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","495","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[Yes]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","495","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[15-01-2024 20:00]]></cell>
        <cell><![CDATA[16-01-2024 08:59]]></cell>
        <cell><![CDATA[28-02-2024 00:00]]></cell>
    </row>
    <row id='343'>
        <cell><![CDATA[<a title='GAIL (India) Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","1038");'>GAIL (India) Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1038");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1038");'></a>]]></cell>
        <cell><![CDATA[<a title='Executive Trainee' href='javascript:void(0);' onclick='TPJNFView("1","1038","2023-2024");'>Executive Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1038","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[720000]]></cell>
        <cell><![CDATA[Please go through attached document]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1038","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[20-12-2023 19:00]]></cell>
        <cell><![CDATA[22-12-2023 15:00]]></cell>
        <cell><![CDATA[27-02-2024 00:00]]></cell>
    </row>
    <row id='344'>
        <cell><![CDATA[<a title='Narayana Group of Education' href='javascript:void(0);' onclick='TPComView("2023-2024","721");'>Narayana Group of Education</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","721");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","721");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Trainee  -  Faculty (Maths / Physics /Chemistry / Biology / Botany / Zoology)' href='javascript:void(0);' onclick='TPJNFView("1","721","2023-2024");'>Associate Trainee  -  Faculty (Maths / Physics /Chemistry / Biology / Botany / Zoology)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","721","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[7.20]]></cell>
        <cell><![CDATA[3 Years]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","721","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[01-12-2023 16:00]]></cell>
        <cell><![CDATA[31-01-2024 10:00]]></cell>
        <cell><![CDATA[25-04-2024 00:00]]></cell>
    </row>
    <row id='345'>
        <cell><![CDATA[<a title='Microland Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","875");'>Microland Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","875");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","875");'></a>]]></cell>
        <cell><![CDATA[<a title='Engineering Trainee' href='javascript:void(0);' onclick='TPJNFView("1","875","2023-2024");'>Engineering Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","875","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[10]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","875","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[15-01-2024 23:00]]></cell>
        <cell><![CDATA[23-01-2024 00:00]]></cell>
    </row>
    <row id='346'>
        <cell><![CDATA[<a title='Larsen & Toubro Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","556");'>Larsen & Toubro Limited</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","556");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","556");'></a>]]></cell>
        <cell><![CDATA[<a title='Management Trainee' href='javascript:void(0);' onclick='TPJNFView("1","556","2023-2024");'>Management Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","556","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[700000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","556","1");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 14:00]]></cell>
        <cell><![CDATA[08-12-2023 08:00]]></cell>
        <cell><![CDATA[20-12-2023 00:00]]></cell>
    </row>
    <row id='347'>
        <cell><![CDATA[<a title='Husk Power Systems Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","159");'>Husk Power Systems Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","159");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","159");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer Trainee' href='javascript:void(0);' onclick='TPJNFView("3","159","2023-2024");'>Software Engineer Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","159","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1300000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","159","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[11-01-2024 13:00]]></cell>
        <cell><![CDATA[13-01-2024 16:00]]></cell>
        <cell><![CDATA[20-02-2024 00:00]]></cell>
    </row>
    <row id='348'>
        <cell><![CDATA[<a title='IMC Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","476");'>IMC Limited</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","476");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","476");'></a>]]></cell>
        <cell><![CDATA[<a title='Chemical Engineer' href='javascript:void(0);' onclick='TPJNFView("4","476","2023-2024");'>Chemical Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","476","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[824925]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","476","4");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[19-01-2024 00:00]]></cell>
    </row>
    <row id='349'>
        <cell><![CDATA[<a title='SRI CHAITANYA EDUCATIONAL INSTITUIONS' href='javascript:void(0);' onclick='TPComView("2023-2024","497");'>SRI CHAITANYA EDUCATIONAL INSTITUIONS</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","497");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","497");'></a>]]></cell>
        <cell><![CDATA[<a title='Associative Lecturer in Maths, Physics and Chemistry' href='javascript:void(0);' onclick='TPJNFView("1","497","2023-2024");'>Associative Lecturer in Maths, Physics and Chemistry</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","497","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[480000]]></cell>
        <cell><![CDATA[3]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","497","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-12-2023 13:00]]></cell>
        <cell><![CDATA[18-01-2024 18:00]]></cell>
        <cell><![CDATA[18-01-2024 00:00]]></cell>
    </row>
    <row id='350'>
        <cell><![CDATA[<a title='GMO Research Pvt Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","341");'>GMO Research Pvt Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","341");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","341");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Development Engineer' href='javascript:void(0);' onclick='TPJNFView("1","341","2023-2024");'>Software Development Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","341","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[RS.1,350,000 PER ANNUM]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","341","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[12-12-2023 15:00]]></cell>
        <cell><![CDATA[12-12-2023 23:59]]></cell>
        <cell><![CDATA[17-12-2023 00:00]]></cell>
    </row>
    <row id='351'>
        <cell><![CDATA[<a title='Institute of Engineering & Management' href='javascript:void(0);' onclick='TPComView("2023-2024","594");'>Institute of Engineering & Management</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","594");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","594");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Professor' href='javascript:void(0);' onclick='TPJNFView("1","594","2023-2024");'>Associate Professor</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","594","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[832560]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","594","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-12-2023 13:00]]></cell>
        <cell><![CDATA[07-12-2023 12:00]]></cell>
        <cell><![CDATA[17-12-2023 00:00]]></cell>
    </row>
    <row id='352'>
        <cell><![CDATA[<a title='Marsh McLennan Global Services India Private Limited (MMGS)' href='javascript:void(0);' onclick='TPComView("2023-2024","842");'>Marsh McLennan Global Services India Private Limited (MMGS)</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","842");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","842");'></a>]]></cell>
        <cell><![CDATA[<a title='Specialist  Investment Strategy & Research' href='javascript:void(0);' onclick='TPJNFView("1","842","2023-2024");'>Specialist  Investment Strategy & Research</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","842","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","842","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 06:00]]></cell>
        <cell><![CDATA[03-12-2023 23:00]]></cell>
        <cell><![CDATA[17-12-2023 00:00]]></cell>
    </row>
    <row id='353'>
        <cell><![CDATA[<a title='SMFG India Credit Company Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","409");'>SMFG India Credit Company Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","409");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","409");'></a>]]></cell>
        <cell><![CDATA[<a title='Management Trainee  Innovation' href='javascript:void(0);' onclick='TPJNFView("4","409","2023-2024");'>Management Trainee  Innovation</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","409","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","409","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[07-12-2023 15:00]]></cell>
        <cell><![CDATA[07-12-2023 22:00]]></cell>
        <cell><![CDATA[17-12-2023 00:00]]></cell>
    </row>
    <row id='354'>
        <cell><![CDATA[<a title='Bandhan Bank Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","991");'>Bandhan Bank Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","991");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","991");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Scientist / Data Analyst' href='javascript:void(0);' onclick='TPJNFView("1","991","2023-2024");'>Data Scientist / Data Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","991","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1400000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","991","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[07-12-2023 13:00]]></cell>
        <cell><![CDATA[09-12-2023 13:00]]></cell>
        <cell><![CDATA[17-01-2024 00:00]]></cell>
    </row>
    <row id='355'>
        <cell><![CDATA[<a title='Lendo' href='javascript:void(0);' onclick='TPComView("2023-2024","1286");'>Lendo</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1286");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1286");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Science' href='javascript:void(0);' onclick='TPJNFView("1","1286","2023-2024");'>Data Science</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1286","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[none]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1286","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[28-02-2024 11:45]]></cell>
        <cell><![CDATA[01-03-2024 18:00]]></cell>
        <cell><![CDATA[16-04-2024 00:00]]></cell>
    </row>
    <row id='356'>
        <cell><![CDATA[<a title='AGANITHA COGNITIVE SOLUTIONS PVT LTD' href='javascript:void(0);' onclick='TPComView("2023-2024","482");'>AGANITHA COGNITIVE SOLUTIONS PVT LTD</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","482");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","482");'></a>]]></cell>
        <cell><![CDATA[<a title='Jr/Sr Scientist' href='javascript:void(0);' onclick='TPJNFView("1","482","2023-2024");'>Jr/Sr Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","482","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","482","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[15-12-2023 00:00]]></cell>
    </row>
    <row id='357'>
        <cell><![CDATA[<a title='E-Ring IT Solutions Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","190");'>E-Ring IT Solutions Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","190");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","190");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Development Engineer' href='javascript:void(0);' onclick='TPJNFView("3","190","2023-2024");'>Software Development Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","190","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[900000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","190","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[15-12-2023 00:00]]></cell>
    </row>
    <row id='358'>
        <cell><![CDATA[<a title='John Deere' href='javascript:void(0);' onclick='TPComView("2023-2024","1011");'>John Deere</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1011");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1011");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Engineer Trainee' href='javascript:void(0);' onclick='TPJNFView("1","1011","2023-2024");'>Graduate Engineer Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1011","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1340000]]></cell>
        <cell><![CDATA[Yes, 2 years service bond.]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1011","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-12-2023 18:00]]></cell>
        <cell><![CDATA[10-12-2023 22:00]]></cell>
        <cell><![CDATA[15-12-2023 00:00]]></cell>
    </row>
    <row id='359'>
        <cell><![CDATA[<a title='Tredence Analytics' href='javascript:void(0);' onclick='TPComView("2023-2024","473");'>Tredence Analytics</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","473");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","473");'></a>]]></cell>
        <cell><![CDATA[<a title='Analyst - Data Science' href='javascript:void(0);' onclick='TPJNFView("1","473","2023-2024");'>Analyst - Data Science</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","473","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[744000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","473","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[07-12-2023 15:00]]></cell>
        <cell><![CDATA[09-12-2023 13:00]]></cell>
        <cell><![CDATA[15-12-2023 00:00]]></cell>
    </row>
    <row id='360'>
        <cell><![CDATA[<a title='UIDAI' href='javascript:void(0);' onclick='TPComView("2023-2024","1006");'>UIDAI</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1006");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1006");'></a>]]></cell>
        <cell><![CDATA[<a title='Technical Executive' href='javascript:void(0);' onclick='TPJNFView("1","1006","2023-2024");'>Technical Executive</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1006","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1700000]]></cell>
        <cell><![CDATA[Contract of 3 yrs and further extendable. No financial implications. Employees can leave anytime.]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1006","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-12-2023 00:00]]></cell>
        <cell><![CDATA[10-12-2023 23:59]]></cell>
        <cell><![CDATA[15-12-2023 00:00]]></cell>
    </row>
    <row id='361'>
        <cell><![CDATA[<a title='Bluetech Research Inc.' href='javascript:void(0);' onclick='TPComView("2023-2024","1192");'>Bluetech Research Inc.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1192");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1192");'></a>]]></cell>
        <cell><![CDATA[<a title='Consultant' href='javascript:void(0);' onclick='TPJNFView("1","1192","2023-2024");'>Consultant</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1192","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1192","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[08-02-2024 17:00]]></cell>
        <cell><![CDATA[09-02-2024 23:59]]></cell>
        <cell><![CDATA[15-04-2024 00:00]]></cell>
    </row>
    <row id='362'>
        <cell><![CDATA[<a title='MATI Carbon India PVT LTD.' href='javascript:void(0);' onclick='TPComView("2023-2024","1415");'>MATI Carbon India PVT LTD.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1415");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1415");'></a>]]></cell>
        <cell><![CDATA[<a title='Management Trainee' href='javascript:void(0);' onclick='TPJNFView("1","1415","2023-2024");'>Management Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1415","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[The Employee agrees to remain with the Company for 24 months after joining, acknowledging the investment in training. Should the Employee choose to leave before this period, they must compensate the Company with six months' worth of their salary to cover training costs and the process of finding a replacement.]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1415","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[18-03-2024 11:00]]></cell>
        <cell><![CDATA[19-03-2024 23:59]]></cell>
        <cell><![CDATA[15-04-2024 00:00]]></cell>
    </row>
    <row id='363'>
        <cell><![CDATA[<a title='Buoyancy Consultants & Engineering LLP' href='javascript:void(0);' onclick='TPComView("2023-2024","978");'>Buoyancy Consultants & Engineering LLP</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","978");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","978");'></a>]]></cell>
        <cell><![CDATA[<a title='Junior Naval Architect' href='javascript:void(0);' onclick='TPJNFView("1","978","2023-2024");'>Junior Naval Architect</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","978","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[740000]]></cell>
        <cell><![CDATA[2 Year Minimum Service Commitment]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","978","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-12-2023 16:00]]></cell>
        <cell><![CDATA[07-12-2023 18:00]]></cell>
        <cell><![CDATA[14-12-2023 00:00]]></cell>
    </row>
    <row id='364'>
        <cell><![CDATA[<a title='CUBASTION CONSULTING PVT. LTD.' href='javascript:void(0);' onclick='TPComView("2023-2024","175");'>CUBASTION CONSULTING PVT. LTD.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","175");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","175");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Trainee Engineer' href='javascript:void(0);' onclick='TPJNFView("1","175","2023-2024");'>Graduate Trainee Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","175","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[815865]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","175","1");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[12-12-2023 11:00]]></cell>
        <cell><![CDATA[12-12-2023 17:30]]></cell>
        <cell><![CDATA[14-12-2023 00:00]]></cell>
    </row>
    <row id='365'>
        <cell><![CDATA[<a title='Delta Electronics India Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","766");'>Delta Electronics India Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","766");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","766");'></a>]]></cell>
        <cell><![CDATA[<a title='Software- Testing and Development' href='javascript:void(0);' onclick='TPJNFView("3","766","2023-2024");'>Software- Testing and Development</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","766","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[10,50,000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","766","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[06-12-2023 20:00]]></cell>
        <cell><![CDATA[07-12-2023 12:00]]></cell>
        <cell><![CDATA[14-12-2023 00:00]]></cell>
    </row>
    <row id='366'>
        <cell><![CDATA[<a title='Ford Business Solutions (Formally known as Ford Motor Pvt Ltd)' href='javascript:void(0);' onclick='TPComView("2023-2024","733");'>Ford Business Solutions (Formally known as Ford Motor Pvt Ltd)</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","733");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","733");'></a>]]></cell>
        <cell><![CDATA[<a title='GDIA' href='javascript:void(0);' onclick='TPJNFView("1","733","2023-2024");'>GDIA</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","733","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1450000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","733","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[29-11-2023 15:00]]></cell>
        <cell><![CDATA[30-11-2023 18:00]]></cell>
        <cell><![CDATA[14-12-2023 00:00]]></cell>
    </row>
    <row id='367'>
        <cell><![CDATA[<a title='Neterwala Group' href='javascript:void(0);' onclick='TPComView("2023-2024","961");'>Neterwala Group</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","961");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","961");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Trainees (Associates)' href='javascript:void(0);' onclick='TPJNFView("1","961","2023-2024");'>Graduate Trainees (Associates)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","961","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","961","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[02-12-2023 20:10]]></cell>
        <cell><![CDATA[03-12-2023 15:00]]></cell>
        <cell><![CDATA[14-12-2023 00:00]]></cell>
    </row>
    <row id='368'>
        <cell><![CDATA[<a title='Nine Education' href='javascript:void(0);' onclick='TPComView("2023-2024","705");'>Nine Education</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","705");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","705");'></a>]]></cell>
        <cell><![CDATA[<a title='Senior Faculty' href='javascript:void(0);' onclick='TPJNFView("1","705","2023-2024");'>Senior Faculty</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","705","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","705","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[01-12-2023 16:00]]></cell>
        <cell><![CDATA[06-12-2023 23:59]]></cell>
        <cell><![CDATA[14-12-2023 00:00]]></cell>
    </row>
    <row id='369'>
        <cell><![CDATA[<a title='Shakti Pumps (India) Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","901");'>Shakti Pumps (India) Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","901");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","901");'></a>]]></cell>
        <cell><![CDATA[<a title='Manager - IT' href='javascript:void(0);' onclick='TPJNFView("3","901","2023-2024");'>Manager - IT</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","901","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[800000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","901","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 06:00]]></cell>
        <cell><![CDATA[12-12-2023 08:00]]></cell>
        <cell><![CDATA[14-12-2023 00:00]]></cell>
    </row>
    <row id='370'>
        <cell><![CDATA[<a title='SMFG India Credit Company Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","409");'>SMFG India Credit Company Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","409");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","409");'></a>]]></cell>
        <cell><![CDATA[<a title='Management Trainee  Data Engineering' href='javascript:void(0);' onclick='TPJNFView("2","409","2023-2024");'>Management Trainee  Data Engineering</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","409","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","409","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[05-12-2023 02:00]]></cell>
        <cell><![CDATA[05-12-2023 18:00]]></cell>
        <cell><![CDATA[14-12-2023 00:00]]></cell>
    </row>
    <row id='371'>
        <cell><![CDATA[<a title='TCS Research' href='javascript:void(0);' onclick='TPComView("2023-2024","228");'>TCS Research</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","228");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","228");'></a>]]></cell>
        <cell><![CDATA[<a title='Systems Engineer' href='javascript:void(0);' onclick='TPJNFView("5","228","2023-2024");'>Systems Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","228","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1150000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","228","5");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[05-12-2023 11:00]]></cell>
        <cell><![CDATA[07-12-2023 14:00]]></cell>
        <cell><![CDATA[14-12-2023 00:00]]></cell>
    </row>
    <row id='372'>
        <cell><![CDATA[<a title='Technip Energies' href='javascript:void(0);' onclick='TPComView("2023-2024","820");'>Technip Energies</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","820");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","820");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Trainee Program' href='javascript:void(0);' onclick='TPJNFView("1","820","2023-2024");'>Graduate Trainee Program</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","820","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[650000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","820","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[05-12-2023 19:00]]></cell>
        <cell><![CDATA[09-12-2023 17:00]]></cell>
        <cell><![CDATA[14-12-2023 00:00]]></cell>
    </row>
    <row id='373'>
        <cell><![CDATA[<a title='TechnipFMC' href='javascript:void(0);' onclick='TPComView("2023-2024","632");'>TechnipFMC</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","632");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","632");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Engineer' href='javascript:void(0);' onclick='TPJNFView("1","632","2023-2024");'>Associate Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","632","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[724000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","632","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[09-12-2023 17:00]]></cell>
        <cell><![CDATA[14-12-2023 00:00]]></cell>
    </row>
    <row id='374'>
        <cell><![CDATA[<a title='thyssenkrupp Industrial Solutions (India) Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","601");'>thyssenkrupp Industrial Solutions (India) Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","601");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","601");'></a>]]></cell>
        <cell><![CDATA[<a title='Engineer' href='javascript:void(0);' onclick='TPJNFView("1","601","2023-2024");'>Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","601","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[774500]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","601","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[07-12-2023 15:00]]></cell>
        <cell><![CDATA[09-12-2023 23:59]]></cell>
        <cell><![CDATA[14-12-2023 00:00]]></cell>
    </row>
    <row id='375'>
        <cell><![CDATA[<a title='TVS MOTORS COMPANY LTD' href='javascript:void(0);' onclick='TPComView("2023-2024","787");'>TVS MOTORS COMPANY LTD</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","787");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","787");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Engineer' href='javascript:void(0);' onclick='TPJNFView("4","787","2023-2024");'>Data Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","787","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[No - NDA is to be signed by the final selects]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","787","4");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[29-11-2023 15:00]]></cell>
        <cell><![CDATA[30-11-2023 18:00]]></cell>
        <cell><![CDATA[13-12-2023 00:00]]></cell>
    </row>
    <row id='376'>
        <cell><![CDATA[<a title='TVS MOTORS COMPANY LTD' href='javascript:void(0);' onclick='TPComView("2023-2024","787");'>TVS MOTORS COMPANY LTD</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","787");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","787");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Scientist' href='javascript:void(0);' onclick='TPJNFView("3","787","2023-2024");'>Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","787","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[No - NDA is to be signed by the final selects]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","787","3");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[29-11-2023 15:00]]></cell>
        <cell><![CDATA[30-11-2023 18:00]]></cell>
        <cell><![CDATA[13-12-2023 00:00]]></cell>
    </row>
    <row id='377'>
        <cell><![CDATA[<a title='Vassar Labs IT Solutions' href='javascript:void(0);' onclick='TPComView("2023-2024","289");'>Vassar Labs IT Solutions</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","289");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","289");'></a>]]></cell>
        <cell><![CDATA[<a title='Software development Engineer-R&D Engineer(Internship cum Full time)' href='javascript:void(0);' onclick='TPJNFView("2","289","2023-2024");'>Software development Engineer-R&D Engineer(Internship cum Full time)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","289","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[12]]></cell>
        <cell><![CDATA[yes, 2 years]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","289","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[04-12-2023 23:00]]></cell>
        <cell><![CDATA[13-12-2023 00:00]]></cell>
    </row>
    <row id='378'>
        <cell><![CDATA[<a title='Vassar Labs IT Solutions' href='javascript:void(0);' onclick='TPComView("2023-2024","289");'>Vassar Labs IT Solutions</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","289");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","289");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Scientist' href='javascript:void(0);' onclick='TPJNFView("1","289","2023-2024");'>Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","289","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[14]]></cell>
        <cell><![CDATA[yes, 2 years]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","289","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[04-12-2023 23:00]]></cell>
        <cell><![CDATA[13-12-2023 00:00]]></cell>
    </row>
    <row id='379'>
        <cell><![CDATA[<a title='Accenture Japan Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","445");'>Accenture Japan Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","445");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","445");'></a>]]></cell>
        <cell><![CDATA[<a title='Business Consultant' href='javascript:void(0);' onclick='TPJNFView("2","445","2023-2024");'>Business Consultant</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","445","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[7474000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","445","2");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[01-10-2023 11:04]]></cell>
        <cell><![CDATA[03-10-2023 18:00]]></cell>
        <cell><![CDATA[12-12-2023 00:00]]></cell>
    </row>
    <row id='380'>
        <cell><![CDATA[<a title='Accenture Japan Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","445");'>Accenture Japan Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","445");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","445");'></a>]]></cell>
        <cell><![CDATA[<a title='AI Architect' href='javascript:void(0);' onclick='TPJNFView("5","445","2023-2024");'>AI Architect</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","445","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[7724000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","445","5");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[01-10-2023 11:06]]></cell>
        <cell><![CDATA[03-10-2023 18:00]]></cell>
        <cell><![CDATA[12-12-2023 00:00]]></cell>
    </row>
    <row id='381'>
        <cell><![CDATA[<a title='Accenture Japan Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","445");'>Accenture Japan Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","445");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","445");'></a>]]></cell>
        <cell><![CDATA[<a title='Digital Consultant' href='javascript:void(0);' onclick='TPJNFView("1","445","2023-2024");'>Digital Consultant</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","445","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[7474000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","445","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[01-10-2023 11:07]]></cell>
        <cell><![CDATA[03-10-2023 18:00]]></cell>
        <cell><![CDATA[12-12-2023 00:00]]></cell>
    </row>
    <row id='382'>
        <cell><![CDATA[<a title='BizAcuity Solutions Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","911");'>BizAcuity Solutions Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","911");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","911");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("1","911","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","911","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[9]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","911","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[05-12-2023 19:00]]></cell>
        <cell><![CDATA[06-12-2023 12:00]]></cell>
        <cell><![CDATA[12-12-2023 00:00]]></cell>
    </row>
    <row id='383'>
        <cell><![CDATA[<a title='Mareana Inc.' href='javascript:void(0);' onclick='TPComView("2023-2024","599");'>Mareana Inc.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","599");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","599");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Software Engineer' href='javascript:void(0);' onclick='TPJNFView("1","599","2023-2024");'>Associate Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","599","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","599","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 17:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[12-12-2023 00:00]]></cell>
    </row>
    <row id='384'>
        <cell><![CDATA[<a title='MPokket' href='javascript:void(0);' onclick='TPComView("2023-2024","904");'>MPokket</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","904");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","904");'></a>]]></cell>
        <cell><![CDATA[<a title='Java-SE/SSE' href='javascript:void(0);' onclick='TPJNFView("3","904","2023-2024");'>Java-SE/SSE</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","904","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[720000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","904","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[05-12-2023 17:00]]></cell>
        <cell><![CDATA[06-12-2023 12:00]]></cell>
        <cell><![CDATA[12-12-2023 00:00]]></cell>
    </row>
    <row id='385'>
        <cell><![CDATA[<a title='MPokket' href='javascript:void(0);' onclick='TPComView("2023-2024","904");'>MPokket</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","904");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","904");'></a>]]></cell>
        <cell><![CDATA[<a title='Frontend Developer' href='javascript:void(0);' onclick='TPJNFView("1","904","2023-2024");'>Frontend Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","904","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[720000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","904","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[05-12-2023 19:00]]></cell>
        <cell><![CDATA[06-12-2023 12:00]]></cell>
        <cell><![CDATA[12-12-2023 00:00]]></cell>
    </row>
    <row id='386'>
        <cell><![CDATA[<a title='MPokket' href='javascript:void(0);' onclick='TPComView("2023-2024","904");'>MPokket</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","904");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","904");'></a>]]></cell>
        <cell><![CDATA[<a title='QE- ASE' href='javascript:void(0);' onclick='TPJNFView("2","904","2023-2024");'>QE- ASE</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","904","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[720000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","904","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[05-12-2023 19:00]]></cell>
        <cell><![CDATA[06-12-2023 12:00]]></cell>
        <cell><![CDATA[12-12-2023 00:00]]></cell>
    </row>
    <row id='387'>
        <cell><![CDATA[<a title='OYO India' href='javascript:void(0);' onclick='TPComView("2023-2024","1005");'>OYO India</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1005");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1005");'></a>]]></cell>
        <cell><![CDATA[<a title='Revenue Lead' href='javascript:void(0);' onclick='TPJNFView("2","1005","2023-2024");'>Revenue Lead</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","1005","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[900000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1005","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[07-12-2023 15:00]]></cell>
        <cell><![CDATA[07-12-2023 23:59]]></cell>
        <cell><![CDATA[12-12-2023 00:00]]></cell>
    </row>
    <row id='388'>
        <cell><![CDATA[<a title='OYO India' href='javascript:void(0);' onclick='TPComView("2023-2024","1005");'>OYO India</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1005");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1005");'></a>]]></cell>
        <cell><![CDATA[<a title='Business Analyst' href='javascript:void(0);' onclick='TPJNFView("1","1005","2023-2024");'>Business Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1005","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1100000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1005","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[07-12-2023 15:00]]></cell>
        <cell><![CDATA[07-12-2023 23:59]]></cell>
        <cell><![CDATA[12-12-2023 00:00]]></cell>
    </row>
    <row id='389'>
        <cell><![CDATA[<a title='CAPILLARY TECHNOLOGIES' href='javascript:void(0);' onclick='TPComView("2023-2024","1154");'>CAPILLARY TECHNOLOGIES</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1154");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1154");'></a>]]></cell>
        <cell><![CDATA[<a title='SOFTWARE DEVELOPER' href='javascript:void(0);' onclick='TPJNFView("1","1154","2023-2024");'>SOFTWARE DEVELOPER</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1154","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1300000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1154","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[31-01-2024 18:30]]></cell>
        <cell><![CDATA[01-02-2024 18:00]]></cell>
        <cell><![CDATA[12-02-2024 00:00]]></cell>
    </row>
    <row id='390'>
        <cell><![CDATA[<a title='PubMatic India Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","997");'>PubMatic India Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","997");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","997");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("1","997","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","997","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","997","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[08-12-2023 19:00]]></cell>
        <cell><![CDATA[08-01-2024 23:59]]></cell>
        <cell><![CDATA[12-01-2024 00:00]]></cell>
    </row>
    <row id='391'>
        <cell><![CDATA[<a title='Tata Electronics Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","982");'>Tata Electronics Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","982");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","982");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Engineer Trainee' href='javascript:void(0);' onclick='TPJNFView("1","982","2023-2024");'>Graduate Engineer Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","982","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[15]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","982","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[06-12-2023 20:00]]></cell>
        <cell><![CDATA[07-12-2023 23:59]]></cell>
        <cell><![CDATA[12-01-2024 00:00]]></cell>
    </row>
    <row id='392'>
        <cell><![CDATA[<a title='Air India' href='javascript:void(0);' onclick='TPComView("2023-2024","404");'>Air India</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","404");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","404");'></a>]]></cell>
        <cell><![CDATA[<a title='Mathematics Analyst' href='javascript:void(0);' onclick='TPJNFView("7","404","2023-2024");'>Mathematics Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("7","404","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1961783]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","404","7");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[01-12-2023 19:30]]></cell>
        <cell><![CDATA[08-12-2023 17:30]]></cell>
        <cell><![CDATA[11-12-2023 00:00]]></cell>
    </row>
    <row id='393'>
        <cell><![CDATA[<a title='Air India' href='javascript:void(0);' onclick='TPComView("2023-2024","404");'>Air India</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","404");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","404");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("1","404","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","404","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1961873]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","404","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[01-12-2023 19:30]]></cell>
        <cell><![CDATA[02-12-2023 18:00]]></cell>
        <cell><![CDATA[11-12-2023 00:00]]></cell>
    </row>
    <row id='394'>
        <cell><![CDATA[<a title='CESC Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","799");'>CESC Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","799");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","799");'></a>]]></cell>
        <cell><![CDATA[<a title='Executive on Probation' href='javascript:void(0);' onclick='TPJNFView("1","799","2023-2024");'>Executive on Probation</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","799","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[750000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","799","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[05-12-2023 19:00]]></cell>
        <cell><![CDATA[06-12-2023 12:00]]></cell>
        <cell><![CDATA[11-12-2023 00:00]]></cell>
    </row>
    <row id='395'>
        <cell><![CDATA[<a title='Jindal Stainless Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","819");'>Jindal Stainless Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","819");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","819");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Engineer Trainee' href='javascript:void(0);' onclick='TPJNFView("1","819","2023-2024");'>Graduate Engineer Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","819","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[772730]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","819","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 14:00]]></cell>
        <cell><![CDATA[04-12-2023 20:00]]></cell>
        <cell><![CDATA[11-12-2023 00:00]]></cell>
    </row>
    <row id='396'>
        <cell><![CDATA[<a title='Jindal Stainless Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","819");'>Jindal Stainless Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","819");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","819");'></a>]]></cell>
        <cell><![CDATA[<a title='Post Graduate Engineer Trainee' href='javascript:void(0);' onclick='TPJNFView("2","819","2023-2024");'>Post Graduate Engineer Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","819","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[863640]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","819","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 14:00]]></cell>
        <cell><![CDATA[04-12-2023 20:00]]></cell>
        <cell><![CDATA[11-12-2023 00:00]]></cell>
    </row>
    <row id='397'>
        <cell><![CDATA[<a title='MasterSoft ERP Solution' href='javascript:void(0);' onclick='TPComView("2023-2024","767");'>MasterSoft ERP Solution</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","767");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","767");'></a>]]></cell>
        <cell><![CDATA[<a title='Manager' href='javascript:void(0);' onclick='TPJNFView("2","767","2023-2024");'>Manager</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","767","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[2yrs]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","767","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[05-12-2023 19:00]]></cell>
        <cell><![CDATA[06-12-2023 11:00]]></cell>
        <cell><![CDATA[11-12-2023 00:00]]></cell>
    </row>
    <row id='398'>
        <cell><![CDATA[<a title='MERCARI' href='javascript:void(0);' onclick='TPComView("2023-2024","65");'>MERCARI</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","65");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","65");'></a>]]></cell>
        <cell><![CDATA[<a title='Machine Learning Engineer' href='javascript:void(0);' onclick='TPJNFView("2","65","2023-2024");'>Machine Learning Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","65","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[6600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","65","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[10-10-2023 20:00]]></cell>
        <cell><![CDATA[12-10-2023 18:00]]></cell>
        <cell><![CDATA[11-12-2023 00:00]]></cell>
    </row>
    <row id='399'>
        <cell><![CDATA[<a title='MERCARI' href='javascript:void(0);' onclick='TPComView("2023-2024","65");'>MERCARI</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","65");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","65");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("1","65","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","65","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[4406400]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","65","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[10-10-2023 20:00]]></cell>
        <cell><![CDATA[12-10-2023 18:00]]></cell>
        <cell><![CDATA[11-12-2023 00:00]]></cell>
    </row>
    <row id='400'>
        <cell><![CDATA[<a title='Midships India Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","893");'>Midships India Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","893");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","893");'></a>]]></cell>
        <cell><![CDATA[<a title='Sr. Associate - DevOps' href='javascript:void(0);' onclick='TPJNFView("1","893","2023-2024");'>Sr. Associate - DevOps</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","893","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2163600]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","893","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[29-11-2023 15:00]]></cell>
        <cell><![CDATA[30-11-2023 18:00]]></cell>
        <cell><![CDATA[11-12-2023 00:00]]></cell>
    </row>
    <row id='401'>
        <cell><![CDATA[<a title='PSL' href='javascript:void(0);' onclick='TPComView("2023-2024","486");'>PSL</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","486");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","486");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("1","486","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","486","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1271000]]></cell>
        <cell><![CDATA[Yes]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","486","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[11-12-2023 00:00]]></cell>
    </row>
    <row id='402'>
        <cell><![CDATA[<a title='Startoon Labs Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","193");'>Startoon Labs Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","193");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","193");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Application Engineer' href='javascript:void(0);' onclick='TPJNFView("4","193","2023-2024");'>Application Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","193","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[550000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","193","4");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[07-12-2023 19:00]]></cell>
        <cell><![CDATA[08-12-2023 17:00]]></cell>
        <cell><![CDATA[11-12-2023 00:00]]></cell>
    </row>
    <row id='403'>
        <cell><![CDATA[<a title='TATA Advanced Systems Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","147");'>TATA Advanced Systems Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","147");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","147");'></a>]]></cell>
        <cell><![CDATA[<a title='Post Graduate Engineer Trainee (PGET)' href='javascript:void(0);' onclick='TPJNFView("2","147","2023-2024");'>Post Graduate Engineer Trainee (PGET)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","147","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[800013]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","147","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 14:00]]></cell>
        <cell><![CDATA[04-12-2023 23:00]]></cell>
        <cell><![CDATA[11-12-2023 00:00]]></cell>
    </row>
    <row id='404'>
        <cell><![CDATA[<a title='Balajee Education Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","1228");'>Balajee Education Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1228");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1228");'></a>]]></cell>
        <cell><![CDATA[<a title='Trainee Faculty - Physics' href='javascript:void(0);' onclick='TPJNFView("1","1228","2023-2024");'>Trainee Faculty - Physics</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1228","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[720000]]></cell>
        <cell><![CDATA[3 Years bond which will be auto renewable after the expiry unless terminated from either side.]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1228","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[20-02-2024 17:00]]></cell>
        <cell><![CDATA[22-02-2024 10:00]]></cell>
        <cell><![CDATA[11-03-2024 00:00]]></cell>
    </row>
    <row id='405'>
        <cell><![CDATA[<a title='Balajee Education Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","1228");'>Balajee Education Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1228");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1228");'></a>]]></cell>
        <cell><![CDATA[<a title='Trainee Faculty - Maths' href='javascript:void(0);' onclick='TPJNFView("3","1228","2023-2024");'>Trainee Faculty - Maths</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","1228","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[720000]]></cell>
        <cell><![CDATA[3 Years bond which will be auto renewable after the expiry unless terminated from either side.]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1228","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[20-02-2024 17:00]]></cell>
        <cell><![CDATA[22-02-2024 10:00]]></cell>
        <cell><![CDATA[11-03-2024 00:00]]></cell>
    </row>
    <row id='406'>
        <cell><![CDATA[<a title='Balajee Education Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","1228");'>Balajee Education Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1228");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1228");'></a>]]></cell>
        <cell><![CDATA[<a title='Trainee Faculty - Chemistry' href='javascript:void(0);' onclick='TPJNFView("2","1228","2023-2024");'>Trainee Faculty - Chemistry</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","1228","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[720000]]></cell>
        <cell><![CDATA[3 Years bond which will be auto renewable after the expiry unless terminated from either side.]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1228","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[20-02-2024 17:00]]></cell>
        <cell><![CDATA[22-02-2024 10:00]]></cell>
        <cell><![CDATA[11-03-2024 00:00]]></cell>
    </row>
    <row id='407'>
        <cell><![CDATA[<a title='Sasken Technologies Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","1123");'>Sasken Technologies Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1123");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1123");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("1","1123","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1123","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[Candidate must be ready to sign a service agreement of 3 years of continued service with the company, failing which she/he agrees to pay to the company, the amount equaling to one years CTC.]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1123","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[24-01-2024 12:02]]></cell>
        <cell><![CDATA[25-01-2024 15:00]]></cell>
        <cell><![CDATA[11-03-2024 00:00]]></cell>
    </row>
    <row id='408'>
        <cell><![CDATA[<a title='National Stock Exchange of India' href='javascript:void(0);' onclick='TPComView("2023-2024","1040");'>National Stock Exchange of India</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1040");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1040");'></a>]]></cell>
        <cell><![CDATA[<a title='Technical Trainee' href='javascript:void(0);' onclick='TPJNFView("1","1040","2023-2024");'>Technical Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1040","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1350000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1040","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[08-01-2024 17:00]]></cell>
        <cell><![CDATA[09-01-2024 18:00]]></cell>
        <cell><![CDATA[10-01-2024 00:00]]></cell>
    </row>
    <row id='409'>
        <cell><![CDATA[<a title='TEXAS INSTRUMENTS' href='javascript:void(0);' onclick='TPComView("2023-2024","167");'>TEXAS INSTRUMENTS</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","167");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","167");'></a>]]></cell>
        <cell><![CDATA[<a title='Digital Engineer (B.Tech)' href='javascript:void(0);' onclick='TPJNFView("6","167","2023-2024");'>Digital Engineer (B.Tech)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","167","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3642060]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","167","6");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[02-11-2023 23:25]]></cell>
        <cell><![CDATA[04-11-2023 18:00]]></cell>
        <cell><![CDATA[09-12-2023 00:00]]></cell>
    </row>
    <row id='410'>
        <cell><![CDATA[<a title='TEXAS INSTRUMENTS' href='javascript:void(0);' onclick='TPComView("2023-2024","167");'>TEXAS INSTRUMENTS</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","167");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","167");'></a>]]></cell>
        <cell><![CDATA[<a title='Embedded Software Engineer (B.Tech)' href='javascript:void(0);' onclick='TPJNFView("7","167","2023-2024");'>Embedded Software Engineer (B.Tech)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("7","167","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3642060]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","167","7");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[02-11-2023 23:25]]></cell>
        <cell><![CDATA[04-11-2023 18:00]]></cell>
        <cell><![CDATA[09-12-2023 00:00]]></cell>
    </row>
    <row id='411'>
        <cell><![CDATA[<a title='TEXAS INSTRUMENTS' href='javascript:void(0);' onclick='TPComView("2023-2024","167");'>TEXAS INSTRUMENTS</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","167");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","167");'></a>]]></cell>
        <cell><![CDATA[<a title='Analog Engineer (B.Tech)' href='javascript:void(0);' onclick='TPJNFView("5","167","2023-2024");'>Analog Engineer (B.Tech)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","167","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3642060]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","167","5");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[02-11-2023 23:25]]></cell>
        <cell><![CDATA[04-11-2023 18:00]]></cell>
        <cell><![CDATA[09-12-2023 00:00]]></cell>
    </row>
    <row id='412'>
        <cell><![CDATA[<a title='TCS Research' href='javascript:void(0);' onclick='TPComView("2023-2024","228");'>TCS Research</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","228");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","228");'></a>]]></cell>
        <cell><![CDATA[<a title='Systems Engineer' href='javascript:void(0);' onclick='TPJNFView("4","228","2023-2024");'>Systems Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","228","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[900000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","228","4");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[05-12-2023 11:00]]></cell>
        <cell><![CDATA[07-12-2023 14:00]]></cell>
        <cell><![CDATA[09-02-2024 00:00]]></cell>
    </row>
    <row id='413'>
        <cell><![CDATA[<a title='APPLE INDIA PRIVATE LIMITED' href='javascript:void(0);' onclick='TPComView("2023-2024","403");'>APPLE INDIA PRIVATE LIMITED</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","403");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","403");'></a>]]></cell>
        <cell><![CDATA[<a title='Cellular Software Engineer' href='javascript:void(0);' onclick='TPJNFView("1","403","2023-2024");'>Cellular Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","403","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3405400]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","403","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[15-11-2023 23:30]]></cell>
        <cell><![CDATA[16-11-2023 23:59]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='414'>
        <cell><![CDATA[<a title='ARC Document Solutions' href='javascript:void(0);' onclick='TPComView("2023-2024","524");'>ARC Document Solutions</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","524");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","524");'></a>]]></cell>
        <cell><![CDATA[<a title='AI-ML Software Engineer' href='javascript:void(0);' onclick='TPJNFView("1","524","2023-2024");'>AI-ML Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","524","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[2 years]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","524","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='415'>
        <cell><![CDATA[<a title='Arth Design Build Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","462");'>Arth Design Build Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","462");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","462");'></a>]]></cell>
        <cell><![CDATA[<a title='Management Trainee - BIM' href='javascript:void(0);' onclick='TPJNFView("2","462","2023-2024");'>Management Trainee - BIM</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","462","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[650000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","462","2");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 18:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='416'>
        <cell><![CDATA[<a title='asadel tech' href='javascript:void(0);' onclick='TPComView("2023-2024","684");'>asadel tech</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","684");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","684");'></a>]]></cell>
        <cell><![CDATA[<a title='AI Engineer' href='javascript:void(0);' onclick='TPJNFView("1","684","2023-2024");'>AI Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","684","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","684","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='417'>
        <cell><![CDATA[<a title='asadel tech' href='javascript:void(0);' onclick='TPComView("2023-2024","684");'>asadel tech</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","684");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","684");'></a>]]></cell>
        <cell><![CDATA[<a title='Sales Exceutive' href='javascript:void(0);' onclick='TPJNFView("3","684","2023-2024");'>Sales Exceutive</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","684","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[600000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","684","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='418'>
        <cell><![CDATA[<a title='BeeHyv Software Solutions Pvt. Ltd.,' href='javascript:void(0);' onclick='TPComView("2023-2024","178");'>BeeHyv Software Solutions Pvt. Ltd.,</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","178");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","178");'></a>]]></cell>
        <cell><![CDATA[<a title='Developer Trainee' href='javascript:void(0);' onclick='TPJNFView("1","178","2023-2024");'>Developer Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","178","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[6,84,727]]></cell>
        <cell><![CDATA[If employee leaves within 6 months of joining, they've to return 75% of the salary paid to them, if they leave between 6 months to 1 year of their joining date, they'll have to return 3 months of their salary.]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","178","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 20:00]]></cell>
        <cell><![CDATA[06-12-2023 23:59]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='419'>
        <cell><![CDATA[<a title='Council on Energy, Environment & Water (CEEW)' href='javascript:void(0);' onclick='TPComView("2023-2024","910");'>Council on Energy, Environment & Water (CEEW)</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","910");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","910");'></a>]]></cell>
        <cell><![CDATA[<a title='Research Analyst' href='javascript:void(0);' onclick='TPJNFView("1","910","2023-2024");'>Research Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","910","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1070000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","910","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='420'>
        <cell><![CDATA[<a title='DEUTSCHE BANK' href='javascript:void(0);' onclick='TPComView("2023-2024","34");'>DEUTSCHE BANK</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","34");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","34");'></a>]]></cell>
        <cell><![CDATA[<a title='Origination & Advisory  Analyst Role' href='javascript:void(0);' onclick='TPJNFView("2","34","2023-2024");'>Origination & Advisory  Analyst Role</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","34","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3013880]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","34","2");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[08-10-2023 19:00]]></cell>
        <cell><![CDATA[10-10-2023 23:59]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='421'>
        <cell><![CDATA[<a title='FinBox' href='javascript:void(0);' onclick='TPComView("2023-2024","590");'>FinBox</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","590");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","590");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("1","590","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","590","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","590","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 08:00]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='422'>
        <cell><![CDATA[<a title='HINDUSTAN PETROLEUM CORPORATION LIMITED' href='javascript:void(0);' onclick='TPComView("2023-2024","765");'>HINDUSTAN PETROLEUM CORPORATION LIMITED</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","765");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","765");'></a>]]></cell>
        <cell><![CDATA[<a title='Officer- Engineering' href='javascript:void(0);' onclick='TPJNFView("1","765","2023-2024");'>Officer- Engineering</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","765","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1493000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","765","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[06-11-2023 01:15]]></cell>
        <cell><![CDATA[07-12-2023 01:00]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='423'>
        <cell><![CDATA[<a title='Indian Register Of shipping' href='javascript:void(0);' onclick='TPComView("2023-2024","694");'>Indian Register Of shipping</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","694");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","694");'></a>]]></cell>
        <cell><![CDATA[<a title='Asst. Surveyor' href='javascript:void(0);' onclick='TPJNFView("1","694","2023-2024");'>Asst. Surveyor</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","694","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[825000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","694","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[05-12-2023 16:00]]></cell>
        <cell><![CDATA[09-12-2023 01:00]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='424'>
        <cell><![CDATA[<a title='Jindal Shadeed Iron & Steel' href='javascript:void(0);' onclick='TPComView("2023-2024","424");'>Jindal Shadeed Iron & Steel</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","424");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","424");'></a>]]></cell>
        <cell><![CDATA[<a title='GET' href='javascript:void(0);' onclick='TPJNFView("1","424","2023-2024");'>GET</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","424","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[20000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","424","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[28-11-2023 14:00]]></cell>
        <cell><![CDATA[29-11-2023 08:00]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='425'>
        <cell><![CDATA[<a title='Kepler Cannon' href='javascript:void(0);' onclick='TPComView("2023-2024","412");'>Kepler Cannon</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","412");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","412");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Consultant' href='javascript:void(0);' onclick='TPJNFView("1","412","2023-2024");'>Associate Consultant</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","412","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1700000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","412","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[05-10-2023 19:00]]></cell>
        <cell><![CDATA[09-10-2023 21:00]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='426'>
        <cell><![CDATA[<a title='KPMG' href='javascript:void(0);' onclick='TPComView("2023-2024","985");'>KPMG</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","985");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","985");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Consultant' href='javascript:void(0);' onclick='TPJNFView("1","985","2023-2024");'>Associate Consultant</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","985","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[7,50,000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","985","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[05-12-2023 16:00]]></cell>
        <cell><![CDATA[07-12-2023 23:59]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='427'>
        <cell><![CDATA[<a title='Microsoft India Development Center' href='javascript:void(0);' onclick='TPComView("2023-2024","98");'>Microsoft India Development Center</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","98");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","98");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("4","98","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","98","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[5103200]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","98","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[06-11-2023 22:20]]></cell>
        <cell><![CDATA[07-11-2023 23:59]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='428'>
        <cell><![CDATA[<a title='OPTYM' href='javascript:void(0);' onclick='TPComView("2023-2024","531");'>OPTYM</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","531");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","531");'></a>]]></cell>
        <cell><![CDATA[<a title='OR Scientist' href='javascript:void(0);' onclick='TPJNFView("7","531","2023-2024");'>OR Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("7","531","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2400000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","531","7");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[24-11-2023 22:00]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='429'>
        <cell><![CDATA[<a title='OPTYM' href='javascript:void(0);' onclick='TPComView("2023-2024","531");'>OPTYM</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","531");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","531");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer - Algorithm Developer' href='javascript:void(0);' onclick='TPJNFView("1","531","2023-2024");'>Software Engineer - Algorithm Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","531","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2400000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","531","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[24-11-2023 22:00]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='430'>
        <cell><![CDATA[<a title='Quicksell' href='javascript:void(0);' onclick='TPComView("2023-2024","332");'>Quicksell</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","332");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","332");'></a>]]></cell>
        <cell><![CDATA[<a title='BACKEND DEVELOPER' href='javascript:void(0);' onclick='TPJNFView("2","332","2023-2024");'>BACKEND DEVELOPER</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","332","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2400000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","332","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 15:59]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='431'>
        <cell><![CDATA[<a title='SIRION LABS' href='javascript:void(0);' onclick='TPComView("2023-2024","460");'>SIRION LABS</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","460");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","460");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("2","460","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","460","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","460","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[01-12-2023 17:00]]></cell>
        <cell><![CDATA[02-12-2023 18:00]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='432'>
        <cell><![CDATA[<a title='Trimble Inc' href='javascript:void(0);' onclick='TPComView("2023-2024","297");'>Trimble Inc</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","297");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","297");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("2","297","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","297","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1600000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","297","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[06-11-2023 23:00]]></cell>
        <cell><![CDATA[07-11-2023 23:59]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='433'>
        <cell><![CDATA[<a title='WCB Robotics India Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","398");'>WCB Robotics India Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","398");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","398");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Design Engineer- Electronics' href='javascript:void(0);' onclick='TPJNFView("1","398","2023-2024");'>Associate Design Engineer- Electronics</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","398","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[950000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","398","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[04-12-2023 23:00]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='434'>
        <cell><![CDATA[<a title='WCB Robotics India Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","398");'>WCB Robotics India Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","398");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","398");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Design Engineer- Robotics' href='javascript:void(0);' onclick='TPJNFView("3","398","2023-2024");'>Associate Design Engineer- Robotics</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","398","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[950000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","398","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[04-12-2023 23:00]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='435'>
        <cell><![CDATA[<a title='WCB Robotics India Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","398");'>WCB Robotics India Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","398");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","398");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Design Engineer- Mechanical' href='javascript:void(0);' onclick='TPJNFView("2","398","2023-2024");'>Associate Design Engineer- Mechanical</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","398","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[950000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","398","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[04-12-2023 23:00]]></cell>
        <cell><![CDATA[08-12-2023 00:00]]></cell>
    </row>
    <row id='436'>
        <cell><![CDATA[<a title='Addverb Technologies' href='javascript:void(0);' onclick='TPComView("2023-2024","1213");'>Addverb Technologies</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1213");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1213");'></a>]]></cell>
        <cell><![CDATA[<a title='Mobile Robotics' href='javascript:void(0);' onclick='TPJNFView("2","1213","2023-2024");'>Mobile Robotics</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","1213","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1600440]]></cell>
        <cell><![CDATA[Retention Bonus is a one-time component and shall be paid after the completion of 3 years atAddverb. Confirmation bonus is a one-time component and shall be paid after successful completion ofprobation period.]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1213","2");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[15-02-2024 18:00]]></cell>
        <cell><![CDATA[16-02-2024 23:00]]></cell>
        <cell><![CDATA[08-04-2024 00:00]]></cell>
    </row>
    <row id='437'>
        <cell><![CDATA[<a title='Bert Labs Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","998");'>Bert Labs Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","998");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","998");'></a>]]></cell>
        <cell><![CDATA[<a title='RESEARCH ENGINEER  FULL STACK DEVELOPER' href='javascript:void(0);' onclick='TPJNFView("1","998","2023-2024");'>RESEARCH ENGINEER  FULL STACK DEVELOPER</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","998","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","998","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[11-01-2024 12:00]]></cell>
        <cell><![CDATA[13-01-2024 23:59]]></cell>
        <cell><![CDATA[08-02-2024 00:00]]></cell>
    </row>
    <row id='438'>
        <cell><![CDATA[<a title='Bert Labs Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","998");'>Bert Labs Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","998");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","998");'></a>]]></cell>
        <cell><![CDATA[<a title='Research Engineer - Data Scientist' href='javascript:void(0);' onclick='TPJNFView("2","998","2023-2024");'>Research Engineer - Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","998","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","998","2");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[11-01-2024 12:00]]></cell>
        <cell><![CDATA[13-01-2024 23:59]]></cell>
        <cell><![CDATA[08-02-2024 00:00]]></cell>
    </row>
    <row id='439'>
        <cell><![CDATA[<a title='Bert Labs Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","998");'>Bert Labs Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","998");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","998");'></a>]]></cell>
        <cell><![CDATA[<a title='Research Engineer - Embedded Firmware/ Wiresless Sensor Network (WSN)' href='javascript:void(0);' onclick='TPJNFView("3","998","2023-2024");'>Research Engineer - Embedded Firmware/ Wiresless Sensor Network (WSN)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","998","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","998","3");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[11-01-2024 12:00]]></cell>
        <cell><![CDATA[13-01-2024 23:59]]></cell>
        <cell><![CDATA[08-02-2024 00:00]]></cell>
    </row>
    <row id='440'>
        <cell><![CDATA[<a title='Aarti Industries Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","690");'>Aarti Industries Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","690");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","690");'></a>]]></cell>
        <cell><![CDATA[<a title='Management Trainee - Chemical Engineering' href='javascript:void(0);' onclick='TPJNFView("1","690","2023-2024");'>Management Trainee - Chemical Engineering</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","690","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[705000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","690","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[04-12-2023 23:00]]></cell>
        <cell><![CDATA[07-12-2023 00:00]]></cell>
    </row>
    <row id='441'>
        <cell><![CDATA[<a title='Aarti Industries Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","690");'>Aarti Industries Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","690");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","690");'></a>]]></cell>
        <cell><![CDATA[<a title='Management Trainee - Mechanical Engineering' href='javascript:void(0);' onclick='TPJNFView("2","690","2023-2024");'>Management Trainee - Mechanical Engineering</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","690","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[705000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","690","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[04-12-2023 23:00]]></cell>
        <cell><![CDATA[07-12-2023 00:00]]></cell>
    </row>
    <row id='442'>
        <cell><![CDATA[<a title='ADROSONIC IT CONSULTANCY SERVICES PVT LTD' href='javascript:void(0);' onclick='TPComView("2023-2024","426");'>ADROSONIC IT CONSULTANCY SERVICES PVT LTD</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","426");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","426");'></a>]]></cell>
        <cell><![CDATA[<a title='Research & Innovation Engineers' href='javascript:void(0);' onclick='TPJNFView("1","426","2023-2024");'>Research & Innovation Engineers</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","426","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[952576 INR [BASIC PAY + JOINING BONUS/ RETENTION=(852576+ 100000 )]]]></cell>
        <cell><![CDATA[R&I requires lot of Investment from organizations end hence it is critical for us to look for a long term association as Innovation requires investment of time and money, hence we are looking for candidates who are looking for long term future with us. Longevity Award is linked with your association with the organization with below mentioned terms and conditions 1. In case You leave within one year from date of your joining, You will owe an amount of Rs300,000/- to the organization 2. In case you leave after completing one year but before your second work anniversary, you will owe an amount of Rs 200,000/- to the organization 3. In case youleave after completing two years but before your third work anniversary, you will owe an amount of Rs 100,000/-to the organization 4. If you are on the payroll of ADROSONIC on the first salary payout date after your third work anniversary, an amount of Rs300,000/- will be paid to you as Longevity Award. INR 3,00,000 to be paid on third work anniversary Accordingly, the overall annual compensation including 1 l.p.a as Longevity award wouldbe INR 9,52,576//]]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","426","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[04-12-2023 22:00]]></cell>
        <cell><![CDATA[07-12-2023 00:00]]></cell>
    </row>
    <row id='443'>
        <cell><![CDATA[<a title='AppOrchid' href='javascript:void(0);' onclick='TPComView("2023-2024","821");'>AppOrchid</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","821");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","821");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Scientist' href='javascript:void(0);' onclick='TPJNFView("3","821","2023-2024");'>Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","821","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","821","3");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[07-12-2023 00:00]]></cell>
    </row>
    <row id='444'>
        <cell><![CDATA[<a title='Arthur D.Little' href='javascript:void(0);' onclick='TPComView("2023-2024","451");'>Arthur D.Little</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","451");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","451");'></a>]]></cell>
        <cell><![CDATA[<a title='Business Analyst Trainee' href='javascript:void(0);' onclick='TPJNFView("1","451","2023-2024");'>Business Analyst Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","451","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2050000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","451","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[15-11-2023 23:30]]></cell>
        <cell><![CDATA[16-11-2023 23:59]]></cell>
        <cell><![CDATA[07-12-2023 00:00]]></cell>
    </row>
    <row id='445'>
        <cell><![CDATA[<a title='Cyient Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","206");'>Cyient Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","206");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","206");'></a>]]></cell>
        <cell><![CDATA[<a title='Mechanical Engineer' href='javascript:void(0);' onclick='TPJNFView("1","206","2023-2024");'>Mechanical Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","206","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[630000]]></cell>
        <cell><![CDATA[Training Investment Recovery- INR 1,00,000 to be paid by candidate if they leave with in 1 year of DOJ]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","206","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[04-12-2023 23:00]]></cell>
        <cell><![CDATA[07-12-2023 00:00]]></cell>
    </row>
    <row id='446'>
        <cell><![CDATA[<a title='D. E. Shaw India Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","17");'>D. E. Shaw India Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","17");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","17");'></a>]]></cell>
        <cell><![CDATA[<a title='Technology Developer' href='javascript:void(0);' onclick='TPJNFView("2","17","2023-2024");'>Technology Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","17","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[6230000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","17","2");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[10-11-2023 01:15]]></cell>
        <cell><![CDATA[10-11-2023 23:59]]></cell>
        <cell><![CDATA[07-12-2023 00:00]]></cell>
    </row>
    <row id='447'>
        <cell><![CDATA[<a title='Google India Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","16");'>Google India Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","16");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","16");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer, University Graduate - Bangalore or Hyderabad' href='javascript:void(0);' onclick='TPJNFView("3","16","2023-2024");'>Software Engineer, University Graduate - Bangalore or Hyderabad</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","16","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3524790]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","16","3");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[19-10-2023 18:03]]></cell>
        <cell><![CDATA[22-10-2023 18:00]]></cell>
        <cell><![CDATA[07-12-2023 00:00]]></cell>
    </row>
    <row id='448'>
        <cell><![CDATA[<a title='I-PAC' href='javascript:void(0);' onclick='TPComView("2023-2024","947");'>I-PAC</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","947");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","947");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate' href='javascript:void(0);' onclick='TPJNFView("1","947","2023-2024");'>Associate</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","947","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[952992]]></cell>
        <cell><![CDATA[18 months for JB + RB payout]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","947","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 18:00]]></cell>
        <cell><![CDATA[06-12-2023 14:00]]></cell>
        <cell><![CDATA[07-12-2023 00:00]]></cell>
    </row>
    <row id='449'>
        <cell><![CDATA[<a title='MOBILEWALLA INFORMATION SOLUTIONS' href='javascript:void(0);' onclick='TPComView("2023-2024","448");'>MOBILEWALLA INFORMATION SOLUTIONS</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","448");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","448");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("1","448","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","448","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1655900]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","448","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 17:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[07-12-2023 00:00]]></cell>
    </row>
    <row id='450'>
        <cell><![CDATA[<a title='OneSubsea' href='javascript:void(0);' onclick='TPComView("2023-2024","689");'>OneSubsea</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","689");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","689");'></a>]]></cell>
        <cell><![CDATA[<a title='Trainee Engineer' href='javascript:void(0);' onclick='TPJNFView("1","689","2023-2024");'>Trainee Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","689","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[720,000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","689","1");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-12-2023 13:00]]></cell>
        <cell><![CDATA[05-12-2023 09:00]]></cell>
        <cell><![CDATA[07-12-2023 00:00]]></cell>
    </row>
    <row id='451'>
        <cell><![CDATA[<a title='QNu Labs' href='javascript:void(0);' onclick='TPComView("2023-2024","818");'>QNu Labs</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","818");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","818");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("1","818","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","818","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","818","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[05-12-2023 15:00]]></cell>
        <cell><![CDATA[05-12-2023 20:00]]></cell>
        <cell><![CDATA[07-12-2023 00:00]]></cell>
    </row>
    <row id='452'>
        <cell><![CDATA[<a title='Quest Global Engineering Services Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","396");'>Quest Global Engineering Services Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","396");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","396");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Senior Engineer' href='javascript:void(0);' onclick='TPJNFView("1","396","2023-2024");'>Senior Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","396","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[900000]]></cell>
        <cell><![CDATA[yes, 2 Years]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","396","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[07-12-2023 00:00]]></cell>
    </row>
    <row id='453'>
        <cell><![CDATA[<a title='Savart' href='javascript:void(0);' onclick='TPComView("2023-2024","860");'>Savart</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","860");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","860");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Scientist' href='javascript:void(0);' onclick='TPJNFView("1","860","2023-2024");'>Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","860","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","860","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 21:00]]></cell>
        <cell><![CDATA[29-11-2023 12:00]]></cell>
        <cell><![CDATA[07-12-2023 00:00]]></cell>
    </row>
    <row id='454'>
        <cell><![CDATA[<a title='SEDEMAC Mechatronics Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","421");'>SEDEMAC Mechatronics Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","421");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","421");'></a>]]></cell>
        <cell><![CDATA[<a title='Engineer, Embedded Software' href='javascript:void(0);' onclick='TPJNFView("3","421","2023-2024");'>Engineer, Embedded Software</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","421","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","421","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[28-10-2023 19:30]]></cell>
        <cell><![CDATA[30-10-2023 18:00]]></cell>
        <cell><![CDATA[07-12-2023 00:00]]></cell>
    </row>
    <row id='455'>
        <cell><![CDATA[<a title='SEDEMAC Mechatronics Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","421");'>SEDEMAC Mechatronics Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","421");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","421");'></a>]]></cell>
        <cell><![CDATA[<a title='Engineer, R&D' href='javascript:void(0);' onclick='TPJNFView("1","421","2023-2024");'>Engineer, R&D</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","421","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","421","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[28-10-2023 19:30]]></cell>
        <cell><![CDATA[30-10-2023 18:00]]></cell>
        <cell><![CDATA[07-12-2023 00:00]]></cell>
    </row>
    <row id='456'>
        <cell><![CDATA[<a title='SMFG India Credit Company Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","409");'>SMFG India Credit Company Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","409");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","409");'></a>]]></cell>
        <cell><![CDATA[<a title='Management Trainee  Analytics' href='javascript:void(0);' onclick='TPJNFView("1","409","2023-2024");'>Management Trainee  Analytics</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","409","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","409","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 23:00]]></cell>
        <cell><![CDATA[07-12-2023 00:00]]></cell>
    </row>
    <row id='457'>
        <cell><![CDATA[<a title='Stardour' href='javascript:void(0);' onclick='TPComView("2023-2024","783");'>Stardour</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","783");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","783");'></a>]]></cell>
        <cell><![CDATA[<a title='Spacecraft Electrical Engineer' href='javascript:void(0);' onclick='TPJNFView("1","783","2023-2024");'>Spacecraft Electrical Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","783","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","783","1");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[01-12-2023 23:00]]></cell>
        <cell><![CDATA[04-12-2023 23:59]]></cell>
        <cell><![CDATA[07-12-2023 00:00]]></cell>
    </row>
    <row id='458'>
        <cell><![CDATA[<a title='Asper.ai ( A Fractal Company)' href='javascript:void(0);' onclick='TPComView("2023-2024","972");'>Asper.ai ( A Fractal Company)</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","972");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","972");'></a>]]></cell>
        <cell><![CDATA[<a title='Full stack development' href='javascript:void(0);' onclick='TPJNFView("2","972","2023-2024");'>Full stack development</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","972","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","972","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[29-11-2023 15:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[06-12-2023 00:00]]></cell>
    </row>
    <row id='459'>
        <cell><![CDATA[<a title='Inverted Energy' href='javascript:void(0);' onclick='TPComView("2023-2024","836");'>Inverted Energy</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","836");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","836");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Engineering Trainee - Mechanical Engineer' href='javascript:void(0);' onclick='TPJNFView("1","836","2023-2024");'>Graduate Engineering Trainee - Mechanical Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","836","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","836","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[06-12-2023 00:00]]></cell>
    </row>
    <row id='460'>
        <cell><![CDATA[<a title='Inverted Energy' href='javascript:void(0);' onclick='TPComView("2023-2024","836");'>Inverted Energy</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","836");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","836");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Engineering Trainee - Electrical/Electronics Engineer' href='javascript:void(0);' onclick='TPJNFView("2","836","2023-2024");'>Graduate Engineering Trainee - Electrical/Electronics Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","836","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","836","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[06-12-2023 00:00]]></cell>
    </row>
    <row id='461'>
        <cell><![CDATA[<a title='Kotak Mahindra Bank Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","661");'>Kotak Mahindra Bank Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","661");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","661");'></a>]]></cell>
        <cell><![CDATA[<a title='Management Trainee - Product Manager (Digital Acq.)' href='javascript:void(0);' onclick='TPJNFView("4","661","2023-2024");'>Management Trainee - Product Manager (Digital Acq.)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","661","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1700000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","661","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[29-11-2023 14:00]]></cell>
        <cell><![CDATA[30-11-2023 12:00]]></cell>
        <cell><![CDATA[06-12-2023 00:00]]></cell>
    </row>
    <row id='462'>
        <cell><![CDATA[<a title='SecPod' href='javascript:void(0);' onclick='TPComView("2023-2024","826");'>SecPod</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","826");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","826");'></a>]]></cell>
        <cell><![CDATA[<a title='AI/ML Engineer' href='javascript:void(0);' onclick='TPJNFView("1","826","2023-2024");'>AI/ML Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","826","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1478400]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","826","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[06-12-2023 00:00]]></cell>
    </row>
    <row id='463'>
        <cell><![CDATA[<a title='SRF Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","269");'>SRF Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","269");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","269");'></a>]]></cell>
        <cell><![CDATA[<a title='Design Trainee' href='javascript:void(0);' onclick='TPJNFView("2","269","2023-2024");'>Design Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","269","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","269","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[06-12-2023 00:00]]></cell>
    </row>
    <row id='464'>
        <cell><![CDATA[<a title='FISCHERJORDAN' href='javascript:void(0);' onclick='TPComView("2023-2024","777");'>FISCHERJORDAN</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","777");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","777");'></a>]]></cell>
        <cell><![CDATA[<a title='Business Analyst FT' href='javascript:void(0);' onclick='TPJNFView("2","777","2023-2024");'>Business Analyst FT</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","777","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2130000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","777","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[24-01-2024 12:30]]></cell>
        <cell><![CDATA[26-01-2024 16:00]]></cell>
        <cell><![CDATA[06-02-2024 00:00]]></cell>
    </row>
    <row id='465'>
        <cell><![CDATA[<a title='Bharat Petroleum Corp. Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","797");'>Bharat Petroleum Corp. Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","797");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","797");'></a>]]></cell>
        <cell><![CDATA[<a title='MANAGEMENT TRAINEE' href='javascript:void(0);' onclick='TPJNFView("1","797","2023-2024");'>MANAGEMENT TRAINEE</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","797","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1948000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","797","1");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-11-2023 23:15]]></cell>
        <cell><![CDATA[05-11-2023 18:00]]></cell>
        <cell><![CDATA[05-12-2023 00:00]]></cell>
    </row>
    <row id='466'>
        <cell><![CDATA[<a title='CARGILL' href='javascript:void(0);' onclick='TPComView("2023-2024","487");'>CARGILL</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","487");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","487");'></a>]]></cell>
        <cell><![CDATA[<a title='Agriculture supply chain Data Analyst' href='javascript:void(0);' onclick='TPJNFView("3","487","2023-2024");'>Agriculture supply chain Data Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","487","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2303338]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","487","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 21:00]]></cell>
        <cell><![CDATA[29-11-2023 18:00]]></cell>
        <cell><![CDATA[05-12-2023 00:00]]></cell>
    </row>
    <row id='467'>
        <cell><![CDATA[<a title='Deloitte India' href='javascript:void(0);' onclick='TPComView("2023-2024","981");'>Deloitte India</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","981");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","981");'></a>]]></cell>
        <cell><![CDATA[<a title='Strategy & OperationsPower, Utilities and Resources: Analyst' href='javascript:void(0);' onclick='TPJNFView("1","981","2023-2024");'>Strategy & OperationsPower, Utilities and Resources: Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","981","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","981","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[01-12-2023 08:00]]></cell>
        <cell><![CDATA[01-12-2023 20:00]]></cell>
        <cell><![CDATA[05-12-2023 00:00]]></cell>
    </row>
    <row id='468'>
        <cell><![CDATA[<a title='Deloitte US India' href='javascript:void(0);' onclick='TPComView("2023-2024","552");'>Deloitte US India</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","552");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","552");'></a>]]></cell>
        <cell><![CDATA[<a title='Deloitte USI Consulting Analyst' href='javascript:void(0);' onclick='TPJNFView("1","552","2023-2024");'>Deloitte USI Consulting Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","552","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1200000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","552","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[19-11-2023 18:00]]></cell>
        <cell><![CDATA[20-11-2023 23:59]]></cell>
        <cell><![CDATA[05-12-2023 00:00]]></cell>
    </row>
    <row id='469'>
        <cell><![CDATA[<a title='EY GDS' href='javascript:void(0);' onclick='TPComView("2023-2024","725");'>EY GDS</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","725");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","725");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Science' href='javascript:void(0);' onclick='TPJNFView("2","725","2023-2024");'>Data Science</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","725","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1260000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","725","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 16:00]]></cell>
        <cell><![CDATA[05-12-2023 00:00]]></cell>
    </row>
    <row id='470'>
        <cell><![CDATA[<a title='EY India' href='javascript:void(0);' onclick='TPComView("2023-2024","658");'>EY India</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","658");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","658");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Consultant (Business Consulting - PI)' href='javascript:void(0);' onclick='TPJNFView("2","658","2023-2024");'>Associate Consultant (Business Consulting - PI)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","658","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1066383]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","658","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 16:00]]></cell>
        <cell><![CDATA[05-12-2023 00:00]]></cell>
    </row>
    <row id='471'>
        <cell><![CDATA[<a title='EY India' href='javascript:void(0);' onclick='TPComView("2023-2024","658");'>EY India</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","658");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","658");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Consultant (Technology Consulting - Analytics)' href='javascript:void(0);' onclick='TPJNFView("1","658","2023-2024");'>Associate Consultant (Technology Consulting - Analytics)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","658","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1066383]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","658","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 16:00]]></cell>
        <cell><![CDATA[05-12-2023 00:00]]></cell>
    </row>
    <row id='472'>
        <cell><![CDATA[<a title='GET MARINE MANAGEMENT (INDIA) PVT. LTD.' href='javascript:void(0);' onclick='TPComView("2023-2024","729");'>GET MARINE MANAGEMENT (INDIA) PVT. LTD.</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","729");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","729");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Product Analyst' href='javascript:void(0);' onclick='TPJNFView("1","729","2023-2024");'>Product Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","729","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","729","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 21:00]]></cell>
        <cell><![CDATA[29-11-2023 18:00]]></cell>
        <cell><![CDATA[05-12-2023 00:00]]></cell>
    </row>
    <row id='473'>
        <cell><![CDATA[<a title='Indxx' href='javascript:void(0);' onclick='TPComView("2023-2024","931");'>Indxx</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","931");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","931");'></a>]]></cell>
        <cell><![CDATA[<a title='Analyst' href='javascript:void(0);' onclick='TPJNFView("1","931","2023-2024");'>Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","931","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","931","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
        <cell><![CDATA[03-12-2023 11:59]]></cell>
        <cell><![CDATA[05-12-2023 00:00]]></cell>
    </row>
    <row id='474'>
        <cell><![CDATA[<a title='JM FINANCIAL LTD.' href='javascript:void(0);' onclick='TPComView("2023-2024","146");'>JM FINANCIAL LTD.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","146");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","146");'></a>]]></cell>
        <cell><![CDATA[<a title='Mobile Developer' href='javascript:void(0);' onclick='TPJNFView("6","146","2023-2024");'>Mobile Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","146","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2400000]]></cell>
        <cell><![CDATA[-]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","146","6");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[29-11-2023 15:00]]></cell>
        <cell><![CDATA[30-11-2023 18:00]]></cell>
        <cell><![CDATA[05-12-2023 00:00]]></cell>
    </row>
    <row id='475'>
        <cell><![CDATA[<a title='JM FINANCIAL LTD.' href='javascript:void(0);' onclick='TPComView("2023-2024","146");'>JM FINANCIAL LTD.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","146");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","146");'></a>]]></cell>
        <cell><![CDATA[<a title='Full Stack Developer (Web)' href='javascript:void(0);' onclick='TPJNFView("5","146","2023-2024");'>Full Stack Developer (Web)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","146","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2400000]]></cell>
        <cell><![CDATA[-]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","146","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[29-11-2023 15:00]]></cell>
        <cell><![CDATA[30-11-2023 18:00]]></cell>
        <cell><![CDATA[05-12-2023 00:00]]></cell>
    </row>
    <row id='476'>
        <cell><![CDATA[<a title='Merilytics, an Accordion company' href='javascript:void(0);' onclick='TPComView("2023-2024","648");'>Merilytics, an Accordion company</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","648");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","648");'></a>]]></cell>
        <cell><![CDATA[<a title='Senior Technical Asscoiate' href='javascript:void(0);' onclick='TPJNFView("4","648","2023-2024");'>Senior Technical Asscoiate</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","648","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1175000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","648","4");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[25-11-2023 16:00]]></cell>
        <cell><![CDATA[27-11-2023 23:59]]></cell>
        <cell><![CDATA[05-12-2023 00:00]]></cell>
    </row>
    <row id='477'>
        <cell><![CDATA[<a title='Merilytics, an Accordion company' href='javascript:void(0);' onclick='TPComView("2023-2024","648");'>Merilytics, an Accordion company</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","648");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","648");'></a>]]></cell>
        <cell><![CDATA[<a title='Senior Business Analyst' href='javascript:void(0);' onclick='TPJNFView("1","648","2023-2024");'>Senior Business Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","648","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1175000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","648","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[25-11-2023 16:00]]></cell>
        <cell><![CDATA[27-11-2023 23:59]]></cell>
        <cell><![CDATA[05-12-2023 00:00]]></cell>
    </row>
    <row id='478'>
        <cell><![CDATA[<a title='Merilytics, an Accordion company' href='javascript:void(0);' onclick='TPComView("2023-2024","648");'>Merilytics, an Accordion company</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","648");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","648");'></a>]]></cell>
        <cell><![CDATA[<a title='Senior Analyst - Data Science' href='javascript:void(0);' onclick='TPJNFView("3","648","2023-2024");'>Senior Analyst - Data Science</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","648","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1220000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","648","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[25-11-2023 16:00]]></cell>
        <cell><![CDATA[27-11-2023 23:59]]></cell>
        <cell><![CDATA[05-12-2023 00:00]]></cell>
    </row>
    <row id='479'>
        <cell><![CDATA[<a title='National Payments Corporation of India (NPCI)' href='javascript:void(0);' onclick='TPComView("2023-2024","187");'>National Payments Corporation of India (NPCI)</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","187");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","187");'></a>]]></cell>
        <cell><![CDATA[<a title='SOFTWARE DEVELOPER' href='javascript:void(0);' onclick='TPJNFView("6","187","2023-2024");'>SOFTWARE DEVELOPER</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","187","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2006000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","187","6");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[19-11-2023 18:00]]></cell>
        <cell><![CDATA[20-11-2023 23:59]]></cell>
        <cell><![CDATA[05-12-2023 00:00]]></cell>
    </row>
    <row id='480'>
        <cell><![CDATA[<a title='National Payments Corporation of India (NPCI)' href='javascript:void(0);' onclick='TPComView("2023-2024","187");'>National Payments Corporation of India (NPCI)</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","187");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","187");'></a>]]></cell>
        <cell><![CDATA[<a title='IT ANALYST - PRODUCT DEVELOPER' href='javascript:void(0);' onclick='TPJNFView("4","187","2023-2024");'>IT ANALYST - PRODUCT DEVELOPER</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","187","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2006000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","187","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[19-11-2023 18:00]]></cell>
        <cell><![CDATA[20-11-2023 23:59]]></cell>
        <cell><![CDATA[05-12-2023 00:00]]></cell>
    </row>
    <row id='481'>
        <cell><![CDATA[<a title='Signzy' href='javascript:void(0);' onclick='TPComView("2023-2024","930");'>Signzy</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","930");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","930");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Development Engineer - 1' href='javascript:void(0);' onclick='TPJNFView("2","930","2023-2024");'>Software Development Engineer - 1</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","930","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2000000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","930","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[02-12-2023 18:00]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[05-12-2023 00:00]]></cell>
    </row>
    <row id='482'>
        <cell><![CDATA[<a title='Sirius AI' href='javascript:void(0);' onclick='TPComView("2023-2024","401");'>Sirius AI</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","401");'></a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","401");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Data & AI Consultant' href='javascript:void(0);' onclick='TPJNFView("2","401","2023-2024");'>Data & AI Consultant</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","401","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1700000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","401","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[29-11-2023 15:00]]></cell>
        <cell><![CDATA[01-12-2023 08:00]]></cell>
        <cell><![CDATA[05-12-2023 00:00]]></cell>
    </row>
    <row id='483'>
        <cell><![CDATA[<a title='Skyflow' href='javascript:void(0);' onclick='TPComView("2023-2024","706");'>Skyflow</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","706");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","706");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("1","706","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","706","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2000000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","706","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 21:00]]></cell>
        <cell><![CDATA[29-11-2023 18:00]]></cell>
        <cell><![CDATA[05-12-2023 00:00]]></cell>
    </row>
    <row id='484'>
        <cell><![CDATA[<a title='Xion Multiventures Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","360");'>Xion Multiventures Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","360");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","360");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Trainee Research Analysis & Operation Support' href='javascript:void(0);' onclick='TPJNFView("1","360","2023-2024");'>Trainee Research Analysis & Operation Support</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","360","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1620000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","360","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[25-11-2023 16:00]]></cell>
        <cell><![CDATA[27-11-2023 23:59]]></cell>
        <cell><![CDATA[05-12-2023 00:00]]></cell>
    </row>
    <row id='485'>
        <cell><![CDATA[<a title='FN Mathlogic Consulting Services Private Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","1142");'>FN Mathlogic Consulting Services Private Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1142");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1142");'></a>]]></cell>
        <cell><![CDATA[<a title='Analyst' href='javascript:void(0);' onclick='TPJNFView("1","1142","2023-2024");'>Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1142","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[910000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1142","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[21-02-2024 10:00]]></cell>
        <cell><![CDATA[22-02-2024 17:00]]></cell>
        <cell><![CDATA[05-03-2024 00:00]]></cell>
    </row>
    <row id='486'>
        <cell><![CDATA[<a title='Friendloan Technologies pvt ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","1117");'>Friendloan Technologies pvt ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1117");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1117");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Developer' href='javascript:void(0);' onclick='TPJNFView("1","1117","2023-2024");'>Software Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1117","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1117","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[27-02-2024 18:00]]></cell>
        <cell><![CDATA[28-02-2024 23:59]]></cell>
        <cell><![CDATA[05-03-2024 00:00]]></cell>
    </row>
    <row id='487'>
        <cell><![CDATA[<a title='MENON & MENON LIMITED' href='javascript:void(0);' onclick='TPComView("2023-2024","138");'>MENON & MENON LIMITED</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","138");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","138");'></a>]]></cell>
        <cell><![CDATA[<a title='Technical Executive- Mechatronics' href='javascript:void(0);' onclick='TPJNFView("3","138","2023-2024");'>Technical Executive- Mechatronics</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","138","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1400000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","138","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[05-03-2024 00:00]]></cell>
    </row>
    <row id='488'>
        <cell><![CDATA[<a title='MENON & MENON LIMITED' href='javascript:void(0);' onclick='TPComView("2023-2024","138");'>MENON & MENON LIMITED</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","138");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","138");'></a>]]></cell>
        <cell><![CDATA[<a title='Technical Executive - Electronics' href='javascript:void(0);' onclick='TPJNFView("1","138","2023-2024");'>Technical Executive - Electronics</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","138","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1400000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","138","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-12-2023 14:00]]></cell>
        <cell><![CDATA[03-12-2023 20:00]]></cell>
        <cell><![CDATA[05-03-2024 00:00]]></cell>
    </row>
    <row id='489'>
        <cell><![CDATA[<a title='Mphasis Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","1102");'>Mphasis Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1102");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1102");'></a>]]></cell>
        <cell><![CDATA[<a title='Senior Software Engineer' href='javascript:void(0);' onclick='TPJNFView("1","1102","2023-2024");'>Senior Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1102","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[11]]></cell>
        <cell><![CDATA[The students would have to sign a 24 months Bond with Mphasis. Incase of default an amount of INR 1,00,000 will be recovered from the employee]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1102","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[10-01-2024 18:00]]></cell>
        <cell><![CDATA[12-01-2024 10:00]]></cell>
        <cell><![CDATA[05-03-2024 00:00]]></cell>
    </row>
    <row id='490'>
        <cell><![CDATA[<a title='KPMG Global Services' href='javascript:void(0);' onclick='TPComView("2023-2024","1080");'>KPMG Global Services</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1080");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1080");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate 2' href='javascript:void(0);' onclick='TPJNFView("1","1080","2023-2024");'>Associate 2</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1080","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1080","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[11-01-2024 15:00]]></cell>
        <cell><![CDATA[14-01-2024 16:00]]></cell>
        <cell><![CDATA[05-02-2024 00:00]]></cell>
    </row>
    <row id='491'>
        <cell><![CDATA[<a title='Vikram Solar Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","136");'>Vikram Solar Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","136");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","136");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Engineer Trainee' href='javascript:void(0);' onclick='TPJNFView("1","136","2023-2024");'>Graduate Engineer Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","136","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[700000]]></cell>
        <cell><![CDATA[2 years Service Bond]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","136","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[18-11-2023 21:30]]></cell>
        <cell><![CDATA[12-12-2023 23:59]]></cell>
        <cell><![CDATA[05-02-2024 00:00]]></cell>
    </row>
    <row id='492'>
        <cell><![CDATA[<a title='Axxela Research & Analytics Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","14");'>Axxela Research & Analytics Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","14");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","14");'></a>]]></cell>
        <cell><![CDATA[<a title='Trainee Analyst' href='javascript:void(0);' onclick='TPJNFView("1","14","2023-2024");'>Trainee Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","14","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1410000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","14","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-10-2023 19:30]]></cell>
        <cell><![CDATA[31-10-2023 23:59]]></cell>
        <cell><![CDATA[03-12-2023 00:00]]></cell>
    </row>
    <row id='493'>
        <cell><![CDATA[<a title='Dolat Capital' href='javascript:void(0);' onclick='TPComView("2023-2024","388");'>Dolat Capital</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","388");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","388");'></a>]]></cell>
        <cell><![CDATA[<a title='Quantitative Analyst' href='javascript:void(0);' onclick='TPJNFView("1","388","2023-2024");'>Quantitative Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","388","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[Service Commitment of 6 Months]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","388","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[25-10-2023 22:45]]></cell>
        <cell><![CDATA[27-10-2023 18:00]]></cell>
        <cell><![CDATA[03-12-2023 00:00]]></cell>
    </row>
    <row id='494'>
        <cell><![CDATA[<a title='Dolat Capital' href='javascript:void(0);' onclick='TPComView("2023-2024","388");'>Dolat Capital</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","388");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","388");'></a>]]></cell>
        <cell><![CDATA[<a title='Quantitative Strategist' href='javascript:void(0);' onclick='TPJNFView("2","388","2023-2024");'>Quantitative Strategist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","388","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[Service Commitment of 6 Months]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","388","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[25-10-2023 22:45]]></cell>
        <cell><![CDATA[27-10-2023 18:00]]></cell>
        <cell><![CDATA[03-12-2023 00:00]]></cell>
    </row>
    <row id='495'>
        <cell><![CDATA[<a title='ICICI Prudential Life Insurance' href='javascript:void(0);' onclick='TPComView("2023-2024","509");'>ICICI Prudential Life Insurance</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","509");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","509");'></a>]]></cell>
        <cell><![CDATA[<a title='Business Associate' href='javascript:void(0);' onclick='TPJNFView("1","509","2023-2024");'>Business Associate</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","509","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","509","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[30-11-2023 13:00]]></cell>
        <cell><![CDATA[01-12-2023 08:00]]></cell>
        <cell><![CDATA[03-12-2023 00:00]]></cell>
    </row>
    <row id='496'>
        <cell><![CDATA[<a title='IDFC FIRST BANK' href='javascript:void(0);' onclick='TPComView("2023-2024","924");'>IDFC FIRST BANK</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","924");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","924");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Data Scientist' href='javascript:void(0);' onclick='TPJNFView("1","924","2023-2024");'>Associate Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","924","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2760000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","924","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[25-11-2023 16:00]]></cell>
        <cell><![CDATA[26-11-2023 18:00]]></cell>
        <cell><![CDATA[03-12-2023 00:00]]></cell>
    </row>
    <row id='497'>
        <cell><![CDATA[<a title='MAKE MY TRIP' href='javascript:void(0);' onclick='TPComView("2023-2024","835");'>MAKE MY TRIP</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","835");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","835");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Scientist' href='javascript:void(0);' onclick='TPJNFView("1","835","2023-2024");'>Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","835","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","835","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 16:00]]></cell>
        <cell><![CDATA[03-12-2023 00:00]]></cell>
    </row>
    <row id='498'>
        <cell><![CDATA[<a title='Nation With Namo' href='javascript:void(0);' onclick='TPComView("2023-2024","390");'>Nation With Namo</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","390");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","390");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate' href='javascript:void(0);' onclick='TPJNFView("1","390","2023-2024");'>Associate</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","390","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1900000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","390","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[17-11-2023 21:30]]></cell>
        <cell><![CDATA[20-11-2023 23:59]]></cell>
        <cell><![CDATA[03-12-2023 00:00]]></cell>
    </row>
    <row id='499'>
        <cell><![CDATA[<a title='Pine Labs' href='javascript:void(0);' onclick='TPComView("2023-2024","87");'>Pine Labs</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","87");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","87");'></a>]]></cell>
        <cell><![CDATA[<a title='APM' href='javascript:void(0);' onclick='TPJNFView("1","87","2023-2024");'>APM</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","87","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2250000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","87","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[25-11-2023 16:00]]></cell>
        <cell><![CDATA[26-11-2023 18:00]]></cell>
        <cell><![CDATA[03-12-2023 00:00]]></cell>
    </row>
    <row id='500'>
        <cell><![CDATA[<a title='Pine Labs' href='javascript:void(0);' onclick='TPComView("2023-2024","87");'>Pine Labs</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","87");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","87");'></a>]]></cell>
        <cell><![CDATA[<a title='SDE - 1' href='javascript:void(0);' onclick='TPJNFView("2","87","2023-2024");'>SDE - 1</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","87","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2250000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","87","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[25-11-2023 16:00]]></cell>
        <cell><![CDATA[26-11-2023 18:00]]></cell>
        <cell><![CDATA[03-12-2023 00:00]]></cell>
    </row>
    <row id='501'>
        <cell><![CDATA[<a title='Siemens EDA (India) Private Limited:- Formerly known as Mentor Graphics' href='javascript:void(0);' onclick='TPComView("2023-2024","182");'>Siemens EDA (India) Private Limited:- Formerly known as Mentor Graphics</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","182");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","182");'></a>]]></cell>
        <cell><![CDATA[<a title='Member Technical Staff:- Digital Profile' href='javascript:void(0);' onclick='TPJNFView("5","182","2023-2024");'>Member Technical Staff:- Digital Profile</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","182","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2024226]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","182","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[02-11-2023 21:25]]></cell>
        <cell><![CDATA[04-11-2023 18:00]]></cell>
        <cell><![CDATA[03-12-2023 00:00]]></cell>
    </row>
    <row id='502'>
        <cell><![CDATA[<a title='TCG DIGITAL SOLUTIONS PVT. LTD.' href='javascript:void(0);' onclick='TPComView("2023-2024","415");'>TCG DIGITAL SOLUTIONS PVT. LTD.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","415");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","415");'></a>]]></cell>
        <cell><![CDATA[<a title='Consultant' href='javascript:void(0);' onclick='TPJNFView("2","415","2023-2024");'>Consultant</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","415","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1600000]]></cell>
        <cell><![CDATA[n]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","415","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[25-11-2023 23:59]]></cell>
        <cell><![CDATA[03-12-2023 00:00]]></cell>
    </row>
    <row id='503'>
        <cell><![CDATA[<a title='TCG DIGITAL SOLUTIONS PVT. LTD.' href='javascript:void(0);' onclick='TPComView("2023-2024","415");'>TCG DIGITAL SOLUTIONS PVT. LTD.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","415");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","415");'></a>]]></cell>
        <cell><![CDATA[<a title='Product Developer' href='javascript:void(0);' onclick='TPJNFView("4","415","2023-2024");'>Product Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","415","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1600000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","415","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[25-11-2023 23:59]]></cell>
        <cell><![CDATA[03-12-2023 00:00]]></cell>
    </row>
    <row id='504'>
        <cell><![CDATA[<a title='ZS Associates' href='javascript:void(0);' onclick='TPComView("2023-2024","85");'>ZS Associates</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","85");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","85");'></a>]]></cell>
        <cell><![CDATA[<a title='Decision Analytics Associate' href='javascript:void(0);' onclick='TPJNFView("2","85","2023-2024");'>Decision Analytics Associate</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","85","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1365600]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","85","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 16:00]]></cell>
        <cell><![CDATA[03-12-2023 00:00]]></cell>
    </row>
    <row id='505'>
        <cell><![CDATA[<a title='ZS Associates' href='javascript:void(0);' onclick='TPComView("2023-2024","85");'>ZS Associates</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","85");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","85");'></a>]]></cell>
        <cell><![CDATA[<a title='Business Technology Solutions Associate' href='javascript:void(0);' onclick='TPJNFView("1","85","2023-2024");'>Business Technology Solutions Associate</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","85","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1365600]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","85","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[27-11-2023 17:00]]></cell>
        <cell><![CDATA[28-11-2023 16:00]]></cell>
        <cell><![CDATA[03-12-2023 00:00]]></cell>
    </row>
    <row id='506'>
        <cell><![CDATA[<a title='Hero Fincorp' href='javascript:void(0);' onclick='TPComView("2023-2024","719");'>Hero Fincorp</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","719");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","719");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Scientist' href='javascript:void(0);' onclick='TPJNFView("1","719","2023-2024");'>Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","719","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","719","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-01-2024 17:30]]></cell>
        <cell><![CDATA[10-01-2024 19:00]]></cell>
        <cell><![CDATA[03-03-2024 00:00]]></cell>
    </row>
    <row id='507'>
        <cell><![CDATA[<a title='Accenture' href='javascript:void(0);' onclick='TPComView("2023-2024","161");'>Accenture</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","161");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","161");'></a>]]></cell>
        <cell><![CDATA[<a title='S&C Delivery Associate' href='javascript:void(0);' onclick='TPJNFView("2","161","2023-2024");'>S&C Delivery Associate</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","161","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1592000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","161","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-10-2023 19:00]]></cell>
        <cell><![CDATA[09-10-2023 18:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='508'>
        <cell><![CDATA[<a title='AURONOVA CONSULTING' href='javascript:void(0);' onclick='TPComView("2023-2024","37");'>AURONOVA CONSULTING</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","37");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","37");'></a>]]></cell>
        <cell><![CDATA[<a title='Analyst' href='javascript:void(0);' onclick='TPJNFView("1","37","2023-2024");'>Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","37","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1400000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","37","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[02-11-2023 21:25]]></cell>
        <cell><![CDATA[05-11-2023 18:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='509'>
        <cell><![CDATA[<a title='AXIS BANK' href='javascript:void(0);' onclick='TPComView("2023-2024","414");'>AXIS BANK</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","414");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","414");'></a>]]></cell>
        <cell><![CDATA[<a title='DBAT: Product Owner' href='javascript:void(0);' onclick='TPJNFView("3","414","2023-2024");'>DBAT: Product Owner</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","414","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1443306]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","414","3");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[21-11-2023 06:00]]></cell>
        <cell><![CDATA[21-11-2023 23:59]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='510'>
        <cell><![CDATA[<a title='AXIS BANK' href='javascript:void(0);' onclick='TPComView("2023-2024","414");'>AXIS BANK</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","414");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","414");'></a>]]></cell>
        <cell><![CDATA[<a title='BIU (Manager)' href='javascript:void(0);' onclick='TPJNFView("2","414","2023-2024");'>BIU (Manager)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","414","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1443306]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","414","2");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[21-11-2023 06:00]]></cell>
        <cell><![CDATA[21-11-2023 23:59]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='511'>
        <cell><![CDATA[<a title='BANK OF AMERICA' href='javascript:void(0);' onclick='TPComView("2023-2024","261");'>BANK OF AMERICA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","261");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","261");'></a>]]></cell>
        <cell><![CDATA[<a title='Senior Tech Associate (B.Tech)' href='javascript:void(0);' onclick='TPJNFView("2","261","2023-2024");'>Senior Tech Associate (B.Tech)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","261","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1550000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","261","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[25-11-2023 12:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='512'>
        <cell><![CDATA[<a title='BANK OF AMERICA' href='javascript:void(0);' onclick='TPComView("2023-2024","261");'>BANK OF AMERICA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","261");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","261");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Analyst, ARQ (Analysis, Research & Quantitative Modeling)' href='javascript:void(0);' onclick='TPJNFView("6","261","2023-2024");'>Data Analyst, ARQ (Analysis, Research & Quantitative Modeling)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","261","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1550000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","261","6");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[25-11-2023 12:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='513'>
        <cell><![CDATA[<a title='BANK OF AMERICA' href='javascript:void(0);' onclick='TPComView("2023-2024","261");'>BANK OF AMERICA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","261");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","261");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Scientist' href='javascript:void(0);' onclick='TPJNFView("5","261","2023-2024");'>Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","261","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1550000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","261","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[25-11-2023 12:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='514'>
        <cell><![CDATA[<a title='CITI BANK' href='javascript:void(0);' onclick='TPComView("2023-2024","30");'>CITI BANK</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","30");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","30");'></a>]]></cell>
        <cell><![CDATA[<a title='Business/Risk Analyst' href='javascript:void(0);' onclick='TPJNFView("1","30","2023-2024");'>Business/Risk Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","30","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1675000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","30","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[07-11-2023 21:35]]></cell>
        <cell><![CDATA[08-11-2023 23:59]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='515'>
        <cell><![CDATA[<a title='CORRIDOR PLATFORMS INC' href='javascript:void(0);' onclick='TPComView("2023-2024","263");'>CORRIDOR PLATFORMS INC</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","263");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","263");'></a>]]></cell>
        <cell><![CDATA[<a title='Full Stack Developer' href='javascript:void(0);' onclick='TPJNFView("2","263","2023-2024");'>Full Stack Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","263","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3200000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","263","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[30-10-2023 22:30]]></cell>
        <cell><![CDATA[01-11-2023 18:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='516'>
        <cell><![CDATA[<a title='Dashtoon' href='javascript:void(0);' onclick='TPComView("2023-2024","796");'>Dashtoon</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","796");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","796");'></a>]]></cell>
        <cell><![CDATA[<a title='Research Engineer, Generative AI' href='javascript:void(0);' onclick='TPJNFView("2","796","2023-2024");'>Research Engineer, Generative AI</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","796","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2000000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","796","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[25-11-2023 16:00]]></cell>
        <cell><![CDATA[27-11-2023 23:59]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='517'>
        <cell><![CDATA[<a title='Dashtoon' href='javascript:void(0);' onclick='TPComView("2023-2024","796");'>Dashtoon</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","796");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","796");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Program Manager' href='javascript:void(0);' onclick='TPJNFView("3","796","2023-2024");'>Associate Program Manager</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","796","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1400000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","796","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[25-11-2023 00:00]]></cell>
        <cell><![CDATA[27-11-2023 23:59]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='518'>
        <cell><![CDATA[<a title='Dashtoon' href='javascript:void(0);' onclick='TPComView("2023-2024","796");'>Dashtoon</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","796");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","796");'></a>]]></cell>
        <cell><![CDATA[<a title='Engineer, Product' href='javascript:void(0);' onclick='TPJNFView("1","796","2023-2024");'>Engineer, Product</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","796","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2000000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","796","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[25-11-2023 16:00]]></cell>
        <cell><![CDATA[27-11-2023 23:59]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='519'>
        <cell><![CDATA[<a title='Databricks' href='javascript:void(0);' onclick='TPComView("2023-2024","7");'>Databricks</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","7");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","7");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("6","7","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","7","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[165000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","7","6");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-10-2023 18:00]]></cell>
        <cell><![CDATA[05-10-2023 23:59]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='520'>
        <cell><![CDATA[<a title='Databricks' href='javascript:void(0);' onclick='TPComView("2023-2024","7");'>Databricks</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","7");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","7");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("5","7","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","7","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[4095000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","7","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[03-10-2023 18:00]]></cell>
        <cell><![CDATA[05-10-2023 23:59]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='521'>
        <cell><![CDATA[<a title='DENSO' href='javascript:void(0);' onclick='TPComView("2023-2024","728");'>DENSO</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","728");'></a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","728");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Research and Development for Edge Computing' href='javascript:void(0);' onclick='TPJNFView("3","728","2023-2024");'>Research and Development for Edge Computing</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","728","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[6854615]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","728","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[14-11-2023 00:30]]></cell>
        <cell><![CDATA[15-11-2023 23:59]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='522'>
        <cell><![CDATA[<a title='FUJITSU REASEARCH OF INDIA PRIVATE LIMITED' href='javascript:void(0);' onclick='TPComView("2023-2024","320");'>FUJITSU REASEARCH OF INDIA PRIVATE LIMITED</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","320");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","320");'></a>]]></cell>
        <cell><![CDATA[<a title='Researcher- AI' href='javascript:void(0);' onclick='TPJNFView("4","320","2023-2024");'>Researcher- AI</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","320","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2200000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","320","4");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[16-10-2023 19:00]]></cell>
        <cell><![CDATA[18-10-2023 18:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='523'>
        <cell><![CDATA[<a title='GENERAL MILLS' href='javascript:void(0);' onclick='TPComView("2023-2024","477");'>GENERAL MILLS</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","477");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","477");'></a>]]></cell>
        <cell><![CDATA[<a title='Analyst - Supply Chain Analytics' href='javascript:void(0);' onclick='TPJNFView("1","477","2023-2024");'>Analyst - Supply Chain Analytics</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","477","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1300000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","477","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[30-10-2023 22:30]]></cell>
        <cell><![CDATA[01-11-2023 18:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='524'>
        <cell><![CDATA[<a title='Graviton Research capital' href='javascript:void(0);' onclick='TPComView("2023-2024","566");'>Graviton Research capital</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","566");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","566");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("2","566","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","566","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[8400000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","566","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[04-10-2023 20:00]]></cell>
        <cell><![CDATA[06-10-2023 18:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='525'>
        <cell><![CDATA[<a title='Graviton Research capital' href='javascript:void(0);' onclick='TPComView("2023-2024","566");'>Graviton Research capital</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","566");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","566");'></a>]]></cell>
        <cell><![CDATA[<a title='Quantitative researcher' href='javascript:void(0);' onclick='TPJNFView("1","566","2023-2024");'>Quantitative researcher</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","566","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[8400000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","566","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[04-10-2023 20:00]]></cell>
        <cell><![CDATA[06-10-2023 18:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='526'>
        <cell><![CDATA[<a title='HILABS INC.' href='javascript:void(0);' onclick='TPComView("2023-2024","257");'>HILABS INC.</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","257");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","257");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Scientist I' href='javascript:void(0);' onclick='TPJNFView("2","257","2023-2024");'>Data Scientist I</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","257","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3293750]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","257","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[23-10-2023 20:25]]></cell>
        <cell><![CDATA[25-10-2023 18:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='527'>
        <cell><![CDATA[<a title='HILABS INC.' href='javascript:void(0);' onclick='TPComView("2023-2024","257");'>HILABS INC.</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","257");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","257");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Developer' href='javascript:void(0);' onclick='TPJNFView("3","257","2023-2024");'>Software Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","257","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3293750]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","257","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[23-10-2023 20:20]]></cell>
        <cell><![CDATA[25-10-2023 18:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='528'>
        <cell><![CDATA[<a title='HSBC (India)' href='javascript:void(0);' onclick='TPComView("2023-2024","15");'>HSBC (India)</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","15");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","15");'></a>]]></cell>
        <cell><![CDATA[<a title='GAC - Analyst' href='javascript:void(0);' onclick='TPJNFView("1","15","2023-2024");'>GAC - Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","15","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1400000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","15","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[25-10-2023 22:45]]></cell>
        <cell><![CDATA[27-10-2023 18:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='529'>
        <cell><![CDATA[<a title='IBM' href='javascript:void(0);' onclick='TPComView("2023-2024","585");'>IBM</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","585");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","585");'></a>]]></cell>
        <cell><![CDATA[<a title='HARDWARE ENGINEER' href='javascript:void(0);' onclick='TPJNFView("6","585","2023-2024");'>HARDWARE ENGINEER</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","585","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","585","6");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[27-10-2023 00:00]]></cell>
        <cell><![CDATA[29-10-2023 23:59]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='530'>
        <cell><![CDATA[<a title='IBM' href='javascript:void(0);' onclick='TPComView("2023-2024","585");'>IBM</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","585");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","585");'></a>]]></cell>
        <cell><![CDATA[<a title='SOFTWARE ENGINEER' href='javascript:void(0);' onclick='TPJNFView("7","585","2023-2024");'>SOFTWARE ENGINEER</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("7","585","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2600000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","585","7");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[27-10-2023 00:00]]></cell>
        <cell><![CDATA[29-10-2023 23:59]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='531'>
        <cell><![CDATA[<a title='ICICI Bank' href='javascript:void(0);' onclick='TPComView("2023-2024","84");'>ICICI Bank</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","84");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","84");'></a>]]></cell>
        <cell><![CDATA[<a title='Management Trainee' href='javascript:void(0);' onclick='TPJNFView("1","84","2023-2024");'>Management Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","84","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1650000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","84","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-10-2023 19:30]]></cell>
        <cell><![CDATA[30-10-2023 18:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='532'>
        <cell><![CDATA[<a title='JAGUAR LAND ROVER Technology and Business Service India Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","280");'>JAGUAR LAND ROVER Technology and Business Service India Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","280");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","280");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Electronics HW design Engineer Trainee' href='javascript:void(0);' onclick='TPJNFView("9","280","2023-2024");'>Graduate Electronics HW design Engineer Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("9","280","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2352000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","280","9");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[23-10-2023 20:25]]></cell>
        <cell><![CDATA[26-10-2023 12:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='533'>
        <cell><![CDATA[<a title='Media.net' href='javascript:void(0);' onclick='TPComView("2023-2024","99");'>Media.net</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","99");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","99");'></a>]]></cell>
        <cell><![CDATA[<a title='Senior Product Analyst' href='javascript:void(0);' onclick='TPJNFView("3","99","2023-2024");'>Senior Product Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","99","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2116000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","99","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[24-11-2023 22:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='534'>
        <cell><![CDATA[<a title='MEESHO' href='javascript:void(0);' onclick='TPComView("2023-2024","298");'>MEESHO</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","298");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","298");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Product Manager I' href='javascript:void(0);' onclick='TPJNFView("2","298","2023-2024");'>Associate Product Manager I</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","298","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2600000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","298","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-10-2023 19:30]]></cell>
        <cell><![CDATA[30-10-2023 18:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='535'>
        <cell><![CDATA[<a title='Micron Technology' href='javascript:void(0);' onclick='TPComView("2023-2024","255");'>Micron Technology</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","255");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","255");'></a>]]></cell>
        <cell><![CDATA[<a title='TPG Semiconductor Engineer' href='javascript:void(0);' onclick='TPJNFView("3","255","2023-2024");'>TPG Semiconductor Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","255","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2470000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","255","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[06-11-2023 22:10]]></cell>
        <cell><![CDATA[08-11-2023 08:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='536'>
        <cell><![CDATA[<a title='SAMSUNG R&D INSTITUTE India - DELHI' href='javascript:void(0);' onclick='TPComView("2023-2024","114");'>SAMSUNG R&D INSTITUTE India - DELHI</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","114");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","114");'></a>]]></cell>
        <cell><![CDATA[<a title='Engineer' href='javascript:void(0);' onclick='TPJNFView("2","114","2023-2024");'>Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","114","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2450000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","114","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[25-10-2023 22:45]]></cell>
        <cell><![CDATA[27-10-2023 18:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='537'>
        <cell><![CDATA[<a title='Siemens EDA (India) Private Limited:- Formerly known as Mentor Graphics' href='javascript:void(0);' onclick='TPComView("2023-2024","182");'>Siemens EDA (India) Private Limited:- Formerly known as Mentor Graphics</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","182");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","182");'></a>]]></cell>
        <cell><![CDATA[<a title='Member Technical Staff:- Software Profile' href='javascript:void(0);' onclick='TPJNFView("4","182","2023-2024");'>Member Technical Staff:- Software Profile</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","182","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2024226]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","182","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[02-11-2023 21:25]]></cell>
        <cell><![CDATA[04-11-2023 18:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='538'>
        <cell><![CDATA[<a title='SLB' href='javascript:void(0);' onclick='TPComView("2023-2024","321");'>SLB</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","321");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","321");'></a>]]></cell>
        <cell><![CDATA[<a title='Fullstack software Engineer' href='javascript:void(0);' onclick='TPJNFView("2","321","2023-2024");'>Fullstack software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","321","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2607283]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","321","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[30-10-2023 22:30]]></cell>
        <cell><![CDATA[01-11-2023 18:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='539'>
        <cell><![CDATA[<a title='Standard Chartered GBS' href='javascript:void(0);' onclick='TPComView("2023-2024","305");'>Standard Chartered GBS</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","305");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","305");'></a>]]></cell>
        <cell><![CDATA[<a title='Risk Analyst' href='javascript:void(0);' onclick='TPJNFView("2","305","2023-2024");'>Risk Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","305","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1947584]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","305","2");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[23-10-2023 20:30]]></cell>
        <cell><![CDATA[25-10-2023 18:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='540'>
        <cell><![CDATA[<a title='SuperAGI' href='javascript:void(0);' onclick='TPComView("2023-2024","871");'>SuperAGI</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","871");'></a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","871");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='AI Engineer' href='javascript:void(0);' onclick='TPJNFView("1","871","2023-2024");'>AI Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","871","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2800000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","871","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 21:00]]></cell>
        <cell><![CDATA[29-11-2023 18:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='541'>
        <cell><![CDATA[<a title='SuperAGI' href='javascript:void(0);' onclick='TPComView("2023-2024","871");'>SuperAGI</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","871");'></a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","871");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='Business Analyst' href='javascript:void(0);' onclick='TPJNFView("5","871","2023-2024");'>Business Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","871","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","871","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 21:00]]></cell>
        <cell><![CDATA[29-11-2023 18:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='542'>
        <cell><![CDATA[<a title='SuperAGI' href='javascript:void(0);' onclick='TPComView("2023-2024","871");'>SuperAGI</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","871");'></a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","871");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='AI Scientist' href='javascript:void(0);' onclick='TPJNFView("3","871","2023-2024");'>AI Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","871","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2800000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","871","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-11-2023 21:00]]></cell>
        <cell><![CDATA[29-11-2023 18:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='543'>
        <cell><![CDATA[<a title='TIger Analytics' href='javascript:void(0);' onclick='TPComView("2023-2024","393");'>TIger Analytics</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","393");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","393");'></a>]]></cell>
        <cell><![CDATA[<a title='Trainee Analyst' href='javascript:void(0);' onclick='TPJNFView("1","393","2023-2024");'>Trainee Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","393","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1300000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","393","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[16-10-2023 19:00]]></cell>
        <cell><![CDATA[18-10-2023 18:00]]></cell>
        <cell><![CDATA[02-12-2023 00:00]]></cell>
    </row>
    <row id='544'>
        <cell><![CDATA[<a title='AIRBUS GROUP INDIA' href='javascript:void(0);' onclick='TPComView("2023-2024","275");'>AIRBUS GROUP INDIA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","275");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","275");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Flight Controls and Hydraulics Development Engineer' href='javascript:void(0);' onclick='TPJNFView("10","275","2023-2024");'>Associate Flight Controls and Hydraulics Development Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("10","275","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","275","10");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[04-10-2023 19:04]]></cell>
        <cell><![CDATA[06-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='545'>
        <cell><![CDATA[<a title='Arpwood Capital' href='javascript:void(0);' onclick='TPComView("2023-2024","408");'>Arpwood Capital</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","408");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","408");'></a>]]></cell>
        <cell><![CDATA[<a title='Analyst' href='javascript:void(0);' onclick='TPJNFView("1","408","2023-2024");'>Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","408","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1700000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","408","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[08-10-2023 19:00]]></cell>
        <cell><![CDATA[10-10-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='546'>
        <cell><![CDATA[<a title='Bajaj Auto' href='javascript:void(0);' onclick='TPComView("2023-2024","2");'>Bajaj Auto</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","2");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","2");'></a>]]></cell>
        <cell><![CDATA[<a title='GTE 2024' href='javascript:void(0);' onclick='TPJNFView("2","2","2023-2024");'>GTE 2024</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","2","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2074000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","2","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[08-10-2023 19:00]]></cell>
        <cell><![CDATA[10-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='547'>
        <cell><![CDATA[<a title='BLACKROCK' href='javascript:void(0);' onclick='TPComView("2023-2024","21");'>BLACKROCK</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","21");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","21");'></a>]]></cell>
        <cell><![CDATA[<a title='Analyst - Dev Ops Roles' href='javascript:void(0);' onclick='TPJNFView("3","21","2023-2024");'>Analyst - Dev Ops Roles</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","21","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2200000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","21","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[06-11-2023 22:10]]></cell>
        <cell><![CDATA[07-11-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='548'>
        <cell><![CDATA[<a title='BLACKROCK' href='javascript:void(0);' onclick='TPComView("2023-2024","21");'>BLACKROCK</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","21");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","21");'></a>]]></cell>
        <cell><![CDATA[<a title='Financial Market Analyst' href='javascript:void(0);' onclick='TPJNFView("2","21","2023-2024");'>Financial Market Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","21","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2800000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","21","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[06-11-2023 22:10]]></cell>
        <cell><![CDATA[07-11-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='549'>
        <cell><![CDATA[<a title='Capital One Services (India) Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","435");'>Capital One Services (India) Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","435");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","435");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate' href='javascript:void(0);' onclick='TPJNFView("1","435","2023-2024");'>Associate</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","435","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2400000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","435","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[10-10-2023 20:00]]></cell>
        <cell><![CDATA[13-10-2023 15:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='550'>
        <cell><![CDATA[<a title='Capital One Services (India) Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","435");'>Capital One Services (India) Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","435");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","435");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate- Software Engineering' href='javascript:void(0);' onclick='TPJNFView("2","435","2023-2024");'>Associate- Software Engineering</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","435","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2400000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","435","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[01-10-2023 11:05]]></cell>
        <cell><![CDATA[03-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='551'>
        <cell><![CDATA[<a title='Da Vinci' href='javascript:void(0);' onclick='TPComView("2023-2024","234");'>Da Vinci</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","234");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","234");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Trader' href='javascript:void(0);' onclick='TPJNFView("1","234","2023-2024");'>Graduate Trader</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","234","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[150000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","234","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[10-10-2023 20:00]]></cell>
        <cell><![CDATA[12-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='552'>
        <cell><![CDATA[<a title='Da Vinci' href='javascript:void(0);' onclick='TPComView("2023-2024","234");'>Da Vinci</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","234");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","234");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Trader - Mumbai' href='javascript:void(0);' onclick='TPJNFView("4","234","2023-2024");'>Graduate Trader - Mumbai</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","234","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[13000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","234","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[10-10-2023 20:00]]></cell>
        <cell><![CDATA[12-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='553'>
        <cell><![CDATA[<a title='Da Vinci' href='javascript:void(0);' onclick='TPComView("2023-2024","234");'>Da Vinci</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","234");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","234");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Quant Researcher - Mumbai' href='javascript:void(0);' onclick='TPJNFView("5","234","2023-2024");'>Graduate Quant Researcher - Mumbai</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","234","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[13000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","234","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[10-10-2023 20:00]]></cell>
        <cell><![CDATA[12-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='554'>
        <cell><![CDATA[<a title='Da Vinci' href='javascript:void(0);' onclick='TPComView("2023-2024","234");'>Da Vinci</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","234");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","234");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Quant Researcher' href='javascript:void(0);' onclick='TPJNFView("2","234","2023-2024");'>Graduate Quant Researcher</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","234","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[150000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","234","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[10-10-2023 20:00]]></cell>
        <cell><![CDATA[12-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='555'>
        <cell><![CDATA[<a title='EXL Service' href='javascript:void(0);' onclick='TPComView("2023-2024","464");'>EXL Service</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","464");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","464");'></a>]]></cell>
        <cell><![CDATA[<a title='Consultant 1' href='javascript:void(0);' onclick='TPJNFView("1","464","2023-2024");'>Consultant 1</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","464","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1100000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","464","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[16-10-2023 14:00]]></cell>
        <cell><![CDATA[17-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='556'>
        <cell><![CDATA[<a title='Flipkart' href='javascript:void(0);' onclick='TPComView("2023-2024","325");'>Flipkart</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","325");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","325");'></a>]]></cell>
        <cell><![CDATA[<a title='Business Analyst' href='javascript:void(0);' onclick='TPJNFView("4","325","2023-2024");'>Business Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","325","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1534962]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","325","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[17-11-2023 21:30]]></cell>
        <cell><![CDATA[19-11-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='557'>
        <cell><![CDATA[<a title='Flipkart' href='javascript:void(0);' onclick='TPComView("2023-2024","325");'>Flipkart</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","325");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","325");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Development Engineer - 1' href='javascript:void(0);' onclick='TPJNFView("2","325","2023-2024");'>Software Development Engineer - 1</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","325","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3257000]]></cell>
        <cell><![CDATA[JB has a clawback period of 2 years from DOJ & RB has a clawback of 1 year from date of payout]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","325","2");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[30-10-2023 22:30]]></cell>
        <cell><![CDATA[01-11-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='558'>
        <cell><![CDATA[<a title='Flipkart Internet Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","687");'>Flipkart Internet Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","687");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","687");'></a>]]></cell>
        <cell><![CDATA[<a title='APM 1' href='javascript:void(0);' onclick='TPJNFView("1","687","2023-2024");'>APM 1</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","687","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","687","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[17-10-2023 19:00]]></cell>
        <cell><![CDATA[19-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='559'>
        <cell><![CDATA[<a title='Glean' href='javascript:void(0);' onclick='TPComView("2023-2024","163");'>Glean</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","163");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","163");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("3","163","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","163","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[16978000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","163","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[08-10-2023 19:05]]></cell>
        <cell><![CDATA[10-10-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='560'>
        <cell><![CDATA[<a title='Glean' href='javascript:void(0);' onclick='TPComView("2023-2024","163");'>Glean</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","163");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","163");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer' href='javascript:void(0);' onclick='TPJNFView("4","163","2023-2024");'>Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","163","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[300000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","163","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[08-10-2023 19:05]]></cell>
        <cell><![CDATA[10-10-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='561'>
        <cell><![CDATA[<a title='Goldman Sachs' href='javascript:void(0);' onclick='TPComView("2023-2024","126");'>Goldman Sachs</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","126");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","126");'></a>]]></cell>
        <cell><![CDATA[<a title='Analyst  Quantitative Strategist' href='javascript:void(0);' onclick='TPJNFView("2","126","2023-2024");'>Analyst  Quantitative Strategist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","126","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3650000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","126","2");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[14-11-2023 00:30]]></cell>
        <cell><![CDATA[15-11-2023 16:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='562'>
        <cell><![CDATA[<a title='Groww' href='javascript:void(0);' onclick='TPComView("2023-2024","43");'>Groww</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","43");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","43");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Product Manager' href='javascript:void(0);' onclick='TPJNFView("1","43","2023-2024");'>Associate Product Manager</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","43","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2400000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","43","1");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[08-10-2023 19:04]]></cell>
        <cell><![CDATA[10-10-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='563'>
        <cell><![CDATA[<a title='HSBC (India)' href='javascript:void(0);' onclick='TPComView("2023-2024","15");'>HSBC (India)</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","15");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","15");'></a>]]></cell>
        <cell><![CDATA[<a title='Trainee Analyst' href='javascript:void(0);' onclick='TPJNFView("2","15","2023-2024");'>Trainee Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","15","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2400000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","15","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[25-10-2023 22:45]]></cell>
        <cell><![CDATA[27-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='564'>
        <cell><![CDATA[<a title='Indus Insights and Analytical Services Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","812");'>Indus Insights and Analytical Services Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","812");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","812");'></a>]]></cell>
        <cell><![CDATA[<a title='Senior Associate-in-Training' href='javascript:void(0);' onclick='TPJNFView("2","812","2023-2024");'>Senior Associate-in-Training</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","812","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1637000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","812","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[10-11-2023 01:15]]></cell>
        <cell><![CDATA[11-11-2023 11:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='565'>
        <cell><![CDATA[<a title='Indus Insights and Analytical Services Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","812");'>Indus Insights and Analytical Services Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","812");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","812");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate' href='javascript:void(0);' onclick='TPJNFView("1","812","2023-2024");'>Associate</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","812","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1477000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","812","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[10-11-2023 01:18]]></cell>
        <cell><![CDATA[11-11-2023 11:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='566'>
        <cell><![CDATA[<a title='ITC' href='javascript:void(0);' onclick='TPComView("2023-2024","921");'>ITC</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","921");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","921");'></a>]]></cell>
        <cell><![CDATA[<a title='AUT- Assistant Under Training' href='javascript:void(0);' onclick='TPJNFView("1","921","2023-2024");'>AUT- Assistant Under Training</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","921","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3073000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","921","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[15-11-2023 23:40]]></cell>
        <cell><![CDATA[16-11-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='567'>
        <cell><![CDATA[<a title='JAGUAR LAND ROVER Technology and Business Service India Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","280");'>JAGUAR LAND ROVER Technology and Business Service India Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","280");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","280");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate EV-Powertrain (Software) Engineer Trainee' href='javascript:void(0);' onclick='TPJNFView("7","280","2023-2024");'>Graduate EV-Powertrain (Software) Engineer Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("7","280","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2352000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","280","7");'>Download</a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[23-10-2023 20:25]]></cell>
        <cell><![CDATA[25-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='568'>
        <cell><![CDATA[<a title='JAGUAR LAND ROVER Technology and Business Service India Limited' href='javascript:void(0);' onclick='TPComView("2023-2024","280");'>JAGUAR LAND ROVER Technology and Business Service India Limited</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","280");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","280");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Software Engineer Trainee' href='javascript:void(0);' onclick='TPJNFView("6","280","2023-2024");'>Graduate Software Engineer Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","280","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2352000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","280","6");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[23-10-2023 20:25]]></cell>
        <cell><![CDATA[24-10-2023 12:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='569'>
        <cell><![CDATA[<a title='MASTERCARD' href='javascript:void(0);' onclick='TPComView("2023-2024","42");'>MASTERCARD</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","42");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","42");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Developer Engineer' href='javascript:void(0);' onclick='TPJNFView("4","42","2023-2024");'>Software Developer Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","42","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2043500]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","42","4");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[11-10-2023 17:00]]></cell>
        <cell><![CDATA[13-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='570'>
        <cell><![CDATA[<a title='MASTERCARD' href='javascript:void(0);' onclick='TPComView("2023-2024","42");'>MASTERCARD</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","42");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","42");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Specialist, Product Development' href='javascript:void(0);' onclick='TPJNFView("5","42","2023-2024");'>Associate Specialist, Product Development</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","42","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2043500]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","42","5");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[11-10-2023 17:00]]></cell>
        <cell><![CDATA[13-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='571'>
        <cell><![CDATA[<a title='McKinsey & Company' href='javascript:void(0);' onclick='TPComView("2023-2024","192");'>McKinsey & Company</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","192");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","192");'></a>]]></cell>
        <cell><![CDATA[<a title='Business Analyst' href='javascript:void(0);' onclick='TPJNFView("2","192","2023-2024");'>Business Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","192","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1950000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","192","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[11-10-2023 17:00]]></cell>
        <cell><![CDATA[13-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='572'>
        <cell><![CDATA[<a title='Navi Technologies Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","843");'>Navi Technologies Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","843");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","843");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Scientist' href='javascript:void(0);' onclick='TPJNFView("2","843","2023-2024");'>Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","843","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[4100000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","843","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[25-11-2023 12:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='573'>
        <cell><![CDATA[<a title='Navi Technologies Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","843");'>Navi Technologies Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","843");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","843");'></a>]]></cell>
        <cell><![CDATA[<a title='Product Analyst' href='javascript:void(0);' onclick='TPJNFView("4","843","2023-2024");'>Product Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","843","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3400000]]></cell>
        <cell><![CDATA[no]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","843","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[25-11-2023 12:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='574'>
        <cell><![CDATA[<a title='Navi Technologies Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","843");'>Navi Technologies Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","843");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","843");'></a>]]></cell>
        <cell><![CDATA[<a title='Business Analyst (Data Analytics)' href='javascript:void(0);' onclick='TPJNFView("3","843","2023-2024");'>Business Analyst (Data Analytics)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","843","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3400000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","843","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[25-11-2023 12:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='575'>
        <cell><![CDATA[<a title='Navi Technologies Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","843");'>Navi Technologies Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","843");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","843");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Development Engineer' href='javascript:void(0);' onclick='TPJNFView("1","843","2023-2024");'>Software Development Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","843","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[4100000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","843","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[24-11-2023 13:00]]></cell>
        <cell><![CDATA[25-11-2023 12:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='576'>
        <cell><![CDATA[<a title='NK Securities Research' href='javascript:void(0);' onclick='TPComView("2023-2024","18");'>NK Securities Research</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","18");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","18");'></a>]]></cell>
        <cell><![CDATA[<a title='Business and Operations Analyst' href='javascript:void(0);' onclick='TPJNFView("6","18","2023-2024");'>Business and Operations Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","18","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3000000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","18","6");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[21-10-2023 21:40]]></cell>
        <cell><![CDATA[23-10-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='577'>
        <cell><![CDATA[<a title='NK Securities Research' href='javascript:void(0);' onclick='TPComView("2023-2024","18");'>NK Securities Research</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","18");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","18");'></a>]]></cell>
        <cell><![CDATA[<a title='Quantitative Researcher' href='javascript:void(0);' onclick='TPJNFView("4","18","2023-2024");'>Quantitative Researcher</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","18","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[16800000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","18","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-10-2023 12:05]]></cell>
        <cell><![CDATA[10-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='578'>
        <cell><![CDATA[<a title='NK Securities Research' href='javascript:void(0);' onclick='TPComView("2023-2024","18");'>NK Securities Research</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","18");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","18");'></a>]]></cell>
        <cell><![CDATA[<a title='High Frequency Trading Software Developer' href='javascript:void(0);' onclick='TPJNFView("3","18","2023-2024");'>High Frequency Trading Software Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","18","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[16800000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","18","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[09-10-2023 12:02]]></cell>
        <cell><![CDATA[11-10-2023 12:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='579'>
        <cell><![CDATA[<a title='NK Securities Research' href='javascript:void(0);' onclick='TPComView("2023-2024","18");'>NK Securities Research</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","18");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","18");'></a>]]></cell>
        <cell><![CDATA[<a title='Trade Monitoring' href='javascript:void(0);' onclick='TPJNFView("5","18","2023-2024");'>Trade Monitoring</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","18","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3000000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","18","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[21-10-2023 21:40]]></cell>
        <cell><![CDATA[23-10-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='580'>
        <cell><![CDATA[<a title='NOMURA' href='javascript:void(0);' onclick='TPComView("2023-2024","44");'>NOMURA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","44");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","44");'></a>]]></cell>
        <cell><![CDATA[<a title='Global Markets Analyst' href='javascript:void(0);' onclick='TPJNFView("4","44","2023-2024");'>Global Markets Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","44","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2250000]]></cell>
        <cell><![CDATA[-]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","44","4");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[17-11-2023 21:30]]></cell>
        <cell><![CDATA[22-11-2023 18:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='581'>
        <cell><![CDATA[<a title='NVIDIA' href='javascript:void(0);' onclick='TPComView("2023-2024","278");'>NVIDIA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","278");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","278");'></a>]]></cell>
        <cell><![CDATA[<a title='Hardware NCG' href='javascript:void(0);' onclick='TPJNFView("7","278","2023-2024");'>Hardware NCG</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("7","278","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2299758]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","278","7");'>Download</a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[17-11-2023 21:30]]></cell>
        <cell><![CDATA[19-11-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='582'>
        <cell><![CDATA[<a title='NVIDIA' href='javascript:void(0);' onclick='TPComView("2023-2024","278");'>NVIDIA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","278");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","278");'></a>]]></cell>
        <cell><![CDATA[<a title='System Software Engineer' href='javascript:void(0);' onclick='TPJNFView("6","278","2023-2024");'>System Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","278","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2799758]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","278","6");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[27-10-2023 00:00]]></cell>
        <cell><![CDATA[29-10-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='583'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='Machine Learning Ops 1 - Krutrim SI' href='javascript:void(0);' onclick='TPJNFView("6","491","2023-2024");'>Machine Learning Ops 1 - Krutrim SI</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","6");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-11-2023 22:50]]></cell>
        <cell><![CDATA[08-11-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='584'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Development Engineer - 1' href='javascript:void(0);' onclick='TPJNFView("2","491","2023-2024");'>Software Development Engineer - 1</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[06-11-2023 22:50]]></cell>
        <cell><![CDATA[08-11-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='585'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='Research engineer 1 - Krutrim SI' href='javascript:void(0);' onclick='TPJNFView("4","491","2023-2024");'>Research engineer 1 - Krutrim SI</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","4");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[06-11-2023 22:50]]></cell>
        <cell><![CDATA[08-11-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='586'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='Model Based Developer' href='javascript:void(0);' onclick='TPJNFView("3","491","2023-2024");'>Model Based Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[06-11-2023 22:50]]></cell>
        <cell><![CDATA[08-11-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='587'>
        <cell><![CDATA[<a title='OLA' href='javascript:void(0);' onclick='TPComView("2023-2024","491");'>OLA</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","491");'></a>]]></cell>
        <cell><![CDATA[<a title='Software development engineer- Autonomous' href='javascript:void(0);' onclick='TPJNFView("1","491","2023-2024");'>Software development engineer- Autonomous</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","491","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","491","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[06-11-2023 22:50]]></cell>
        <cell><![CDATA[08-11-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='588'>
        <cell><![CDATA[<a title='Palo Alto Networks' href='javascript:void(0);' onclick='TPComView("2023-2024","615");'>Palo Alto Networks</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","615");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","615");'></a>]]></cell>
        <cell><![CDATA[<a title='associate engineer' href='javascript:void(0);' onclick='TPJNFView("1","615","2023-2024");'>associate engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","615","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[5471920]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","615","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[13-10-2023 19:00]]></cell>
        <cell><![CDATA[16-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='589'>
        <cell><![CDATA[<a title='Plutus Research Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","595");'>Plutus Research Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","595");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","595");'></a>]]></cell>
        <cell><![CDATA[<a title='Quantitative Analyst' href='javascript:void(0);' onclick='TPJNFView("3","595","2023-2024");'>Quantitative Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","595","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[4950000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","595","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[19-10-2023 18:00]]></cell>
        <cell><![CDATA[21-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='590'>
        <cell><![CDATA[<a title='Procter and Gamble' href='javascript:void(0);' onclick='TPComView("2023-2024","246");'>Procter and Gamble</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","246");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","246");'></a>]]></cell>
        <cell><![CDATA[<a title='Product Supply Manager' href='javascript:void(0);' onclick='TPJNFView("1","246","2023-2024");'>Product Supply Manager</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","246","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3062575]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","246","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[21-10-2023 21:50]]></cell>
        <cell><![CDATA[23-10-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='591'>
        <cell><![CDATA[<a title='QUALCOMM INDIA PVT LTD' href='javascript:void(0);' onclick='TPComView("2023-2024","12");'>QUALCOMM INDIA PVT LTD</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","12");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","12");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Engineer- Hardware' href='javascript:void(0);' onclick='TPJNFView("4","12","2023-2024");'>Associate Engineer- Hardware</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","12","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2316666]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","12","4");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[11-10-2023 17:00]]></cell>
        <cell><![CDATA[12-10-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='592'>
        <cell><![CDATA[<a title='QUALCOMM INDIA PVT LTD' href='javascript:void(0);' onclick='TPComView("2023-2024","12");'>QUALCOMM INDIA PVT LTD</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","12");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","12");'></a>]]></cell>
        <cell><![CDATA[<a title='Associate Engineer- Software' href='javascript:void(0);' onclick='TPJNFView("6","12","2023-2024");'>Associate Engineer- Software</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","12","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2316666]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","12","6");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[11-10-2023 17:00]]></cell>
        <cell><![CDATA[12-10-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='593'>
        <cell><![CDATA[<a title='QuantBox Research' href='javascript:void(0);' onclick='TPComView("2023-2024","132");'>QuantBox Research</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","132");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","132");'></a>]]></cell>
        <cell><![CDATA[<a title='Quant Research and Trading Analyst - Bangalore' href='javascript:void(0);' onclick='TPJNFView("4","132","2023-2024");'>Quant Research and Trading Analyst - Bangalore</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","132","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[12500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","132","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-10-2023 19:30]]></cell>
        <cell><![CDATA[30-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='594'>
        <cell><![CDATA[<a title='QuantBox Research' href='javascript:void(0);' onclick='TPComView("2023-2024","132");'>QuantBox Research</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","132");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","132");'></a>]]></cell>
        <cell><![CDATA[<a title='Core Engineering Analyst - Bangalore' href='javascript:void(0);' onclick='TPJNFView("6","132","2023-2024");'>Core Engineering Analyst - Bangalore</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("6","132","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[12500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","132","6");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-10-2023 19:30]]></cell>
        <cell><![CDATA[30-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='595'>
        <cell><![CDATA[<a title='QuantBox Research' href='javascript:void(0);' onclick='TPComView("2023-2024","132");'>QuantBox Research</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","132");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","132");'></a>]]></cell>
        <cell><![CDATA[<a title='Quant Research and Trading Analyst  Singapore' href='javascript:void(0);' onclick='TPJNFView("5","132","2023-2024");'>Quant Research and Trading Analyst  Singapore</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","132","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[16427520]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","132","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[28-10-2023 19:30]]></cell>
        <cell><![CDATA[30-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='596'>
        <cell><![CDATA[<a title='SAMSUNG R&D INSTITUTE - BANGLORE' href='javascript:void(0);' onclick='TPComView("2023-2024","428");'>SAMSUNG R&D INSTITUTE - BANGLORE</a>]]></cell>
        <cell><![CDATA[<a title='Download' href='javascript:void(0);' onclick='TPComDescription("2023-2024","428");'>Download</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","428");'></a>]]></cell>
        <cell><![CDATA[<a title='Engineer/Senior Engineer' href='javascript:void(0);' onclick='TPJNFView("1","428","2023-2024");'>Engineer/Senior Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","428","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2500000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","428","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[10-11-2023 01:15]]></cell>
        <cell><![CDATA[10-11-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='597'>
        <cell><![CDATA[<a title='Sprinklr India Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","102");'>Sprinklr India Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","102");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","102");'></a>]]></cell>
        <cell><![CDATA[<a title='Product Engineer' href='javascript:void(0);' onclick='TPJNFView("2","102","2023-2024");'>Product Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","102","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[3000000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","102","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[19-10-2023 18:00]]></cell>
        <cell><![CDATA[22-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='598'>
        <cell><![CDATA[<a title='Sprinklr India Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","102");'>Sprinklr India Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","102");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","102");'></a>]]></cell>
        <cell><![CDATA[<a title='Platform Software Engineer' href='javascript:void(0);' onclick='TPJNFView("5","102","2023-2024");'>Platform Software Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","102","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[4500000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","102","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[19-10-2023 18:00]]></cell>
        <cell><![CDATA[22-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='599'>
        <cell><![CDATA[<a title='Sprinklr India Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","102");'>Sprinklr India Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","102");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","102");'></a>]]></cell>
        <cell><![CDATA[<a title='Product Analyst' href='javascript:void(0);' onclick='TPJNFView("3","102","2023-2024");'>Product Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","102","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","102","3");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[19-10-2023 18:00]]></cell>
        <cell><![CDATA[22-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='600'>
        <cell><![CDATA[<a title='Sprinklr India Pvt. Ltd.' href='javascript:void(0);' onclick='TPComView("2023-2024","102");'>Sprinklr India Pvt. Ltd.</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","102");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","102");'></a>]]></cell>
        <cell><![CDATA[<a title='Data Scientist' href='javascript:void(0);' onclick='TPJNFView("4","102","2023-2024");'>Data Scientist</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("4","102","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1800000]]></cell>
        <cell><![CDATA[NA]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","102","4");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[19-10-2023 18:00]]></cell>
        <cell><![CDATA[22-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='601'>
        <cell><![CDATA[<a title='SQUAREPOINT CAPITAL' href='javascript:void(0);' onclick='TPComView("2023-2024","726");'>SQUAREPOINT CAPITAL</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","726");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","726");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Software Developer' href='javascript:void(0);' onclick='TPJNFView("1","726","2023-2024");'>Graduate Software Developer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","726","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[5015744]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","726","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[01-11-2023 01:25]]></cell>
        <cell><![CDATA[03-11-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='602'>
        <cell><![CDATA[<a title='Taiwan Semiconductor Manufacturing Company' href='javascript:void(0);' onclick='TPComView("2023-2024","345");'>Taiwan Semiconductor Manufacturing Company</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","345");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","345");'></a>]]></cell>
        <cell><![CDATA[<a title='RF Engineer' href='javascript:void(0);' onclick='TPJNFView("9","345","2023-2024");'>RF Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("9","345","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[71064]]></cell>
        <cell><![CDATA[2 years]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","345","9");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[16-10-2023 19:51]]></cell>
        <cell><![CDATA[20-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='603'>
        <cell><![CDATA[<a title='Taiwan Semiconductor Manufacturing Company' href='javascript:void(0);' onclick='TPComView("2023-2024","345");'>Taiwan Semiconductor Manufacturing Company</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","345");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","345");'></a>]]></cell>
        <cell><![CDATA[<a title='Image Processing / Machine Learning Engineer' href='javascript:void(0);' onclick='TPJNFView("8","345","2023-2024");'>Image Processing / Machine Learning Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("8","345","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[71064]]></cell>
        <cell><![CDATA[2 years]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","345","8");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[16-10-2023 19:52]]></cell>
        <cell><![CDATA[20-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='604'>
        <cell><![CDATA[<a title='Taiwan Semiconductor Manufacturing Company' href='javascript:void(0);' onclick='TPComView("2023-2024","345");'>Taiwan Semiconductor Manufacturing Company</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","345");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","345");'></a>]]></cell>
        <cell><![CDATA[<a title='AMS/RF/Si-Ph Design Flow Engineer' href='javascript:void(0);' onclick='TPJNFView("1","345","2023-2024");'>AMS/RF/Si-Ph Design Flow Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","345","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[71064]]></cell>
        <cell><![CDATA[2 years]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","345","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[16-10-2023 19:55]]></cell>
        <cell><![CDATA[20-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>ṇ
    <row id='605'>
        <cell><![CDATA[<a title='Taiwan Semiconductor Manufacturing Company' href='javascript:void(0);' onclick='TPComView("2023-2024","345");'>Taiwan Semiconductor Manufacturing Company</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","345");'></a>]]></celṇl>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","345");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer (TSID)' href='javascript:void(0);' onclick='TPJNFView("5","345","2023-2024");'>Software Engineer (TSID)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("5","345","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[71064]]></cell>
        <cell><![CDATA[2 years]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","345","5");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[16-10-2023 19:50]]></cell>
        <cell><![CDATA[20-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='606'>
        <cell><![CDATA[<a title='Taiwan Semiconductor Manufacturing Company' href='javascript:void(0);' onclick='TPComView("2023-2024","345");'>Taiwan Semiconductor Manufacturing Company</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","345");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","345");'></a>]]></cell>
        <cell><![CDATA[<a title='Software Engineer (BSID)' href='javascript:void(0);' onclick='TPJNFView("7","345","2023-2024");'>Software Engineer (BSID)</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("7","345","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[71064]]></cell>
        <cell><![CDATA[2 years]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","345","7");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[16-10-2023 19:00]]></cell>
        <cell><![CDATA[20-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='607'>
        <cell><![CDATA[<a title='Taiwan Semiconductor Manufacturing Company' href='javascript:void(0);' onclick='TPComView("2023-2024","345");'>Taiwan Semiconductor Manufacturing Company</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","345");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","345");'></a>]]></cell>
        <cell><![CDATA[<a title='Physical Design / APR Engineer' href='javascript:void(0);' onclick='TPJNFView("3","345","2023-2024");'>Physical Design / APR Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("3","345","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[71064]]></cell>
        <cell><![CDATA[2 years]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","345","3");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[16-10-2023 19:45]]></cell>
        <cell><![CDATA[20-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='608'>
        <cell><![CDATA[<a title='Taiwan Semiconductor Manufacturing Company' href='javascript:void(0);' onclick='TPComView("2023-2024","345");'>Taiwan Semiconductor Manufacturing Company</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","345");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","345");'></a>]]></cell>
        <cell><![CDATA[<a title='FE Engineer' href='javascript:void(0);' onclick='TPJNFView("2","345","2023-2024");'>FE Engineer</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","345","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[71064]]></cell>
        <cell><![CDATA[2 years]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","345","2");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[16-10-2023 19:45]]></cell>
        <cell><![CDATA[20-10-2023 18:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='609'>
        <cell><![CDATA[<a title='YCP Auctus' href='javascript:void(0);' onclick='TPComView("2023-2024","857");'>YCP Auctus</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","857");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","857");'></a>]]></cell>
        <cell><![CDATA[<a title='Analyst' href='javascript:void(0);' onclick='TPJNFView("1","857","2023-2024");'>Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","857","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1830000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","857","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[05-11-2023 16:45]]></cell>
        <cell><![CDATA[07-11-2023 13:00]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='610'>
        <cell><![CDATA[<a title='ZOMATO LIMITED' href='javascript:void(0);' onclick='TPComView("2023-2024","254");'>ZOMATO LIMITED</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","254");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","254");'></a>]]></cell>
        <cell><![CDATA[<a title='SDE-I' href='javascript:void(0);' onclick='TPJNFView("1","254","2023-2024");'>SDE-I</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","254","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2500000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","254","1");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[13-10-2023 19:00]]></cell>
        <cell><![CDATA[15-10-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='611'>
        <cell><![CDATA[<a title='ZOMATO LIMITED' href='javascript:void(0);' onclick='TPComView("2023-2024","254");'>ZOMATO LIMITED</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","254");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","254");'></a>]]></cell>
        <cell><![CDATA[<a title='Product Analyst' href='javascript:void(0);' onclick='TPJNFView("2","254","2023-2024");'>Product Analyst</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("2","254","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[2100000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","254","2");'></a>]]></cell>
        <cell><![CDATA[Y]]></cell>
        <cell><![CDATA[13-10-2023 19:00]]></cell>
        <cell><![CDATA[15-10-2023 23:59]]></cell>
        <cell><![CDATA[01-12-2023 00:00]]></cell>
    </row>
    <row id='612'>
        <cell><![CDATA[<a title='ZL Technologies India Pvt Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","1316");'>ZL Technologies India Pvt Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1316");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1316");'></a>]]></cell>
        <cell><![CDATA[<a title='Member of Technical Staff' href='javascript:void(0);' onclick='TPJNFView("1","1316","2023-2024");'>Member of Technical Staff</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1316","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[1300000]]></cell>
        <cell><![CDATA[No]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1316","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[09-03-2024 18:30]]></cell>
        <cell><![CDATA[10-03-2024 23:59]]></cell>
        <cell><![CDATA[01-04-2024 00:00]]></cell>
    </row>
    <row id='613'>
        <cell><![CDATA[<a title='LT Foods Ltd' href='javascript:void(0);' onclick='TPComView("2023-2024","1079");'>LT Foods Ltd</a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPComDescription("2023-2024","1079");'></a>]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPPPTDescription("2023-2024","1079");'></a>]]></cell>
        <cell><![CDATA[<a title='Graduate Engineer Trainee' href='javascript:void(0);' onclick='TPJNFView("1","1079","2023-2024");'>Graduate Engineer Trainee</a>]]></cell>
        <cell><![CDATA[<a title='Apply' href='javascript:void(0);' onclick='TPJNFView("1","1079","2023-2024");'>Apply</a>]]></cell>
        <cell><![CDATA[800000]]></cell>
        <cell><![CDATA[NO]]></cell>
        <cell><![CDATA[<a title='' href='javascript:void(0);' onclick='TPJNFDescription("2023-2024","1079","1");'></a>]]></cell>
        <cell><![CDATA[]]></cell>
        <cell><![CDATA[03-01-2024 18:50]]></cell>
        <cell><![CDATA[04-01-2024 23:59]]></cell>
        <cell><![CDATA[01-02-2024 00:00]]></cell>
    </row>
</rows>

`;

// Parse the XML using DOMParser
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");

// Extract information from each row
const rows = xmlDoc.getElementsByTagName("row");
for (let i = 0; i < rows.length; i++) {
  const row = rows[i];

  const cells = row.getElementsByTagName("cell");

  // Assuming the structure of your XML remains consistent
  const companyNameElement = cells[0];
  const test = companyNameElement.firstChild.data;
  //   console.log(test);
  //   console.log(typeof test);

  const start = test.indexOf('title="') + 'title="'.length + 4;
  const end = test.indexOf("'", start);
  const company = test.slice(start, end);

  const companyName = companyNameElement ? company : "N/A";

  const profile = cells[3].childNodes[0].data;
  const start2 = profile.indexOf('title="') + 'title="'.length + 4;
  const end2 = profile.indexOf("'", start2);
  const job = profile.slice(start2, end2);

  const jobProfileElement = cells[3];
  const jobProfile = jobProfileElement ? job : "N/A";

  const salaryCtc = cells[5].textContent.trim();

  // Print or do something with the extracted information
  console.log(`Company Name: ${companyName}`);
  console.log(`Job Profile: ${jobProfile}`);
  console.log(`Salary/CTC: ${salaryCtc}`);
  console.log("-------------------");
}
