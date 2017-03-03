<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
   <head>
      <meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
      <meta name="google-site-verification" content="aX2V6fmn7mulZ2FOGedPuixNgWvSEvT5fAfa965tLKs" />
      <title>PublicNTP</title>
      <link rel="stylesheet" type="text/css" title="CSS" href="style.css" />
   </head>

   <body> 
      <h1>PublicNTP Project</h1>

      <p><em>Last updated</em>: <?php
         date_default_timezone_set( 'US/Eastern' );
         echo date("Y-m-d, g:ia T ", getlastmod()) .
            '(UTC ' . date('O', getlastmod()) . ')';
      ?>
      </p>

      <h2>Mission</h2>

      <p>
      The PublicNTP Project provides unrestricted access to no-cost, highly-accurate
        time sources for the public good.
      </p>

      <h2>Servers</h2>

      <iframe style="margin-left: 0.50in; margin-bottom: 0.25in;"
        src="https://www.google.com/maps/d/embed?mid=1aNSiB3qehuSAzUaBZEYlaTVmtJo"
        width="575" height="400"></iframe>


      <table style="padding-left: 0.5in;">

         <tr>
            <td><strong>Hostname</strong></td>
            <td><strong>Geographic Location</strong></td>
            <td align="center"><strong>Timezone</strong></td>
            <td align="center"><strong>UTC Offset</strong></td>
            <td align="center"><strong>Live Date</strong></td>
            <td><strong>Datacenter</strong></td>
            <td><strong>Notes</strong></td>
         </tr>

         <tr>
            <td>stratum2.pdx01.publicntp.net</td>
            <td><a
            href="https://www.google.com/maps/place/The+Dalles,+OR+97058/@45.6094596,-121.2439003,12z/data=!3m1!4b1!4m5!3m4!1s0x54961dd9a1974387:0x5d2ec66fffe43aaa!8m2!3d45.5945645!4d-121.1786823">The
Dalles, Oregon, USA</a> (near Portland, Oregon)</td>
            <td align="center"><a
            href="http://www.timeanddate.com/worldclock/usa/portland-or">
                <?php
                    date_default_timezone_set( 'US/Pacific' );
                    echo date("T");
                ?></a></td>
            <td align="center"><?php
                echo date('O');
                ?>
            </td>
            <td align="center">2016-07-30</td>
            <td>
               <a href="http://aws.amazon.com">Amazon</a> US-West-2 region</td>
            <td>&nbsp;</td>
         </tr>

         <tr>
            <td>stratum2.sjc01.publicntp.net</td>
            <td><a
            href="https://www.google.com/maps/place/The+Dalles,+OR+97058/@45.6094596,-121.2439003,12z/data=!3m1!4b1!4m5!3m4!1s0x54961dd9a1974387:0x5d2ec66fffe43aaa!8m2!3d45.5945645!4d-121.1786823">San
Jose, California, USA</a></td>
            <td align="center"><a
            href="http://www.timeanddate.com/worldclock/usa/san-jose">
                <?php
                    date_default_timezone_set( 'US/Pacific' );
                    echo date("T");
                ?></a></td>
            <td align="center"><?php
                echo date('O');
                ?>
            </td>
            <td align="center">2016-07-31</td>
            <td>
               <a href="http://aws.amazon.com">Amazon</a> US-West-1 region</td>
            <td>&nbsp;</td>
         </tr>

         <tr>
            <td>stratum1.slc01.publicntp.net</td>
            <td><a
            href="https://www.google.com/maps/place/Salt+Lake+City,+UT/@40.7765868,-111.9905246,12z/data=!3m1!4b1!4m5!3m4!1s0x87523d9488d131ed:0x5b53b7a0484d31ca!8m2!3d40.7607793!4d-111.8910474">Salt
Lake City, Utah, USA</a></td>
            <td align="center"><a
            href="http://www.timeanddate.com/worldclock/usa/salt-lake-city">
                <?php
                    date_default_timezone_set( 'US/Mountain' );
                    echo date("T");
                ?></a></td>
            <td align="center"><?php
                echo date('O');
                ?>
            </td>
            <td align="center">2016-12-30</td>
            <td>Triad Center</td>
            <td>&nbsp;</td>
         </tr>

         <tr>
            <td>stratum2.ord02.publicntp.net</td>
            <td><a
            href="https://maps.google.com/maps?q=725+s+wells+st,+60607&amp;hl=en&amp;hnear=725+S+Wells+St,+Chicago,+Cook,+Illinois+60607&amp;gl=us&amp;t=m&amp;z=13">
Chicago, Illinois, USA</a></td>
            <td align="center"><a
            href="http://www.timeanddate.com/worldclock/city.html?n=64">
                <?php
                    date_default_timezone_set( 'US/Central' );
                    echo date("T");
                ?></a></td>
            <td align="center"><?php
                echo date('O');
                ?>
            </td>
            <td align="center">2008-02-13</td>
            <td>
               <a href="http://steadfast.net">Steadfast</a></td>
            <td>IP address changed on 2012-05-10, see News section</td>
         </tr>

         <tr>
            <td>stratum2.iad01.publicntp.net</td>
            <td><a
            href="https://www.google.com/maps/place/Ashburn,+VA/@39.0300219,-77.5121424,13z/data=!3m1!4b1!4m5!3m4!1s0x89b615f166fcc957:0x9da316eb11e3d5b!8m2!3d39.0437567!4d-77.4874416?hl=en">Ashburn,
Virginia, USA</a> (near Washington, DC)</td>
            <td align="center"><a
            href="http://www.timeanddate.com/worldclock/usa/reston">
                <?php
                    date_default_timezone_set( 'US/Eastern' );
                    echo date("T");
                ?></a></td>
            <td align="center"><?php
                echo date('O'); 
                ?>
            </td>
            <td align="center">2016-07-30</td>
            <td>
               <a href="http://aws.amazon.com">Amazon</a> US-East-1 region</td>
            <td>&nbsp;</td>
         </tr>

         <tr>
            <td>stratum2.yul01.publicntp.net</td>
            <td><a
href="https://www.google.com/maps/place/Montreal,+QC,+Canada/@45.5579564,-73.9917197,10z/data=!4m5!3m4!1s0x4cc91a541c64b70d:0x654e3138211fefef!8m2!3d45.5016889!4d-73.567256">Montreal,
Qu&eacute;bec, Canada</a></td>
            <td align="center"><a href="https://www.timeanddate.com/worldclock/canada/montreal">
                <?php
                    date_default_timezone_set( 'Canada/Eastern' );
                    echo date("T");
                ?></a></td>
            <td align="center"><?php echo date('O');?></td>
            <td align="center">2016-12-20</td>
            <td>
                <a href="http://aws.amazon.com">Amazon</a> CA-Central-1 region</td>
            <td>&nbsp;</td>
         </tr>

         <tr>
            <td>stratum2.gru01.publicntp.net</td>
            <td rowspan="3"><a
            href="https://www.google.com/maps/place/S%C3%A3o+Paulo,+State+of+S%C3%A3o+Paulo,+Brazil/@-23.6815315,-46.8754806,10z/data=!3m1!4b1!4m5!3m4!1s0x94ce448183a461d1:0x9ba94b08ff335bae!8m2!3d-23.5505199!4d-46.6333094">S&atilde;o
Paulo, Brazil</a></td>
            <td rowspan="3" align="center"><a
            href="http://www.timeanddate.com/worldclock/brazil/sao-paulo">
                <?php
                    date_default_timezone_set( 'America/Sao_Paulo' );
                    echo date("T");
                ?></a></td>
            <td rowspan="3" align="center"><?php
                echo date('O');
                ?>
            </td>
            <td align="center">2016-08-03</td>
            <td>
               <a href="http://aws.amazon.com">Amazon</a> SA-East-1a availablility zone</td>
            <td>&nbsp;</td>
         </tr>

         <tr>
            <td>stratum2-02.gru01.publicntp.net</td>
            <td align="center">2016-12-28</td>
            <td>
               <a href="http://aws.amazon.com">Amazon</a> SA-East-1a availablility zone</td>
            <td>&nbsp;</td>
         </tr>

         <tr>
            <td>stratum2.gru02.publicntp.net</td>
            <td align="center">2016-12-28</td>
            <td>
               <a href="http://aws.amazon.com">Amazon</a> SA-East-1c availablility zone</td>
            <td>&nbsp;</td>
         </tr>



         <tr>
            <td>stratum2.dub01.publicntp.net</td>
            <td><a
            href="https://www.google.com/maps/place/Dublin,+Ireland/@53.324443,-6.3857855,11z/data=!3m1!4b1!4m5!3m4!1s0x48670e80ea27ac2f:0xa00c7a9973171a0!8m2!3d53.3498053!4d-6.2603097">Dublin, Ireland</a></td>
            <td align="center"><a
            href="http://www.timeanddate.com/worldclock/ireland/dublin">
                <?php
                    date_default_timezone_set( 'Europe/Dublin' );
                    echo date("T");
                ?></a></td>
            <td align="center"><?php
                echo date('O');
                ?>
            </td>
            <td align="center">2016-07-31</td>
            <td>
               <a href="http://aws.amazon.com">Amazon</a> EU-West-1 region</td>
            <td>&nbsp;</td>
         </tr>

         <tr>
            <td>stratum2.fra01.publicntp.net</td>
            <td><a
            href="https://www.google.com/maps/place/Frankfurt,+Germany/@50.1213479,8.4964821,11z/data=!3m1!4b1!4m5!3m4!1s0x47bd096f477096c5:0x422435029b0c600!8m2!3d50.1109221!4d8.6821267">Frankfurt,
Germany</a></td>
            <td align="center"><a
            href="http://www.timeanddate.com/worldclock/germany/frankfurt">
                <?php
                    date_default_timezone_set( 'Europe/Berlin' );
                    echo date("T");
                ?></a></td>
            <td align="center"><?php
                echo date('O');
                ?>
            </td>
            <td align="center">2016-07-31</td>
            <td>
               <a href="http://aws.amazon.com">Amazon</a> EU-Central-1 region</td>
            <td>&nbsp;</td>
         </tr>

         <tr>
            <td>stratum2.bom01.publicntp.net</td>
            <td><a
            href="https://www.google.com/maps/place/Mumbai,+Maharashtra,+India/@19.0830943,72.7411198,11z/data=!3m1!4b1!4m5!3m4!1s0x3be7c6306644edc1:0x5da4ed8f8d648c69!8m2!3d19.0759837!4d72.8776559">Mumbai,
India</a></td>
            <td align="center"><a
            href="http://www.timeanddate.com/worldclock/india/mumbai">
                <?php
                    date_default_timezone_set( 'Asia/Kolkata' );
                    echo date("T");
                ?></a></td>
            <td align="center"><?php
                echo date('O');
                ?>
            </td>
            <td align="center">2016-08-01</td>
            <td>
               <a href="http://aws.amazon.com">Amazon</a> AP-South-1 region</td>
            <td>&nbsp;</td>
         </tr>

         <tr>
            <td>stratum2-01.blr01.publicntp.net</td>
            <td><a
            href="https://www.google.com/maps/place/Bengaluru,+Karnataka,+India/@12.95396,77.4908555,11z/data=!3m1!4b1!4m5!3m4!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627">Bangalore,
India</a></td>
            <td align="center"><a
            href="http://www.timeanddate.com/worldclock/india/bangalore">
                <?php
                    date_default_timezone_set( 'Asia/Kolkata' );
                    echo date("T");
                ?></a></td>
            <td align="center"><?php
                echo date('O');
                ?>
            </td>
            <td align="center">2017-01-09</td>
            <td>
               <a href="http://digitalocean.com">DigitalOcean</a> BLR1 datacenter</td>
            <td>Supports IPv4 &amp; IPv6</td>
         </tr>

         <tr>
            <td>stratum2.sin01.publicntp.net</td>
            <td rowspan="2"><a
            href="https://www.google.com/maps/place/Singapore/@1.3149013,103.7769791,12z/data=!3m1!4b1!4m5!3m4!1s0x31da11238a8b9375:0x887869cf52abf5c4!8m2!3d1.352083!4d103.819836">Singapore</a></td>
            <td align="center" rowspan="2"><a
            href="http://www.timeanddate.com/worldclock/singapore/singapore">
                <?php
                    date_default_timezone_set( 'Asia/Singapore' );
                    echo date("T");
                ?></a></td>
            <td align="center" rowspan="2"><?php
                echo date('O');
                ?>
            </td>
            <td align="center">2016-08-03</td>
            <td>
               <a href="http://aws.amazon.com">Amazon</a> AP-Southeast-1 region</td>
            <td>&nbsp;</td>
         </tr>

         <tr>
            <td>stratum2-01.sin02.publicntp.net</td>
            <td align="center">2017-02-26</td>
            <td>
               <a href="http://digitalocean.com">DigitalOcean</a> SGP1 datacenter</td>
            <td>Supports IPv4 &amp; IPv6</td>
         </tr>


         <tr>
            <td>stratum2.hnd01.publicntp.net</td>
            <td><a
            href="https://www.google.com/maps/place/Tokyo,+Japan/@35.6735408,139.570305,11z/data=!3m1!4b1!4m5!3m4!1s0x605d1b87f02e57e7:0x2e01618b22571b89!8m2!3d35.6894875!4d139.6917064">Tokyo,
Japan</a></td>
            <td align="center"><a
            href="http://www.timeanddate.com/worldclock/japan/tokyo">
                <?php
                    date_default_timezone_set( 'Asia/Tokyo' );
                    echo date("T");
                ?></a></td>
            <td align="center"><?php
                echo date('O');
                ?>
            </td>
            <td align="center">2016-08-04</td>
            <td>
               <a href="http://aws.amazon.com">Amazon</a> AP-Northeast-1 region</td>
            <td>&nbsp;</td>
         </tr>

         <tr>
            <td>stratum2.syd01.publicntp.net</td>
            <td><a
            href="https://www.google.com/maps/place/Sydney+NSW,+Australia/@-33.847404,150.6517953,10z/data=!3m1!4b1!4m5!3m4!1s0x6b129838f39a743f:0x3017d681632a850!8m2!3d-33.8688197!4d151.2092955">Sydney,
Australia</a></td>
            <td align="center"><a
            href="http://www.timeanddate.com/worldclock/australia/sydney">
                <?php
                    date_default_timezone_set( 'Australia/Sydney' );
                    echo date("T");
                ?></a></td>
            <td align="center"><?php
                echo date('O');
                ?>
            </td>
            <td align="center">2016-07-31</td>
            <td>
               <a href="http://aws.amazon.com">Amazon</a> AP-Southeast-2 region</td>
            <td>&nbsp;</td>
         </tr>


      </table>

      <p style="text-decoration: underline;">Notes:</p>
      <div>
      <ul>
         <li>All project servers are proud to participate in the
         <a href="http://www.pool.ntp.org/">NTP Pool Project</a></li>

         <li>All project servers operate at NTP stratum one or stratum two. 
            Stratum one servers directly access high-quality time sources, such as GPS 
            or CDMA signals. Stratum two servers synchronize across 
            the network to stratum one servers.  It's uncommon for stratum two
            servers to vary from the 
            <a href="https://en.wikipedia.org/wiki/Coordinated_Universal_Time">Coordinated
            Universal Time</a> (UTC) standard by more than 2-3 milliseconds 
            (one millisecond = 0.001 seconds). Stratum one servers can achieve microsecond
            (0.000001 seconds) or better accuracy</li></ul>
      </ul></div>

      <!--
      <p style="text-decoration: underline;">Planned Deployments:</p>
      <div>
      <ul>
         <li><a href="https://aws.amazon.com/blogs/aws/in-the-works-aws-region-in-canada/">Montreal</a>,
         Qu&eacute;bec, Canada (2016)</li>
      </ul>
      </div>
      -->

      <h2>News</h2>

         <p><strong>3 March 2017</strong>: two new stratum two servers deployed, one in Bangalore, India (BLR01) and
            a second in Singapore (SIN02). Both servers support IPv6 clients.</p>

         <p><strong>30 December 2016</strong>: Three new servers deployed! Two new stratum two servers 
            in S&atilde;o Paulo, Brazil (GRU01/02), and the project's first stratum one server in 
            Salt Lake City, Utah, USA (SLC01)!</p>

         <p><strong>20 December 2016</strong>: new server in Montreal, Qu&eacute;bec, Canada (YUL01) deployed!</p>

         <p><strong>4 August 2016</strong>: <em>another</em> four new servers deployed!</p>
            <div> 
               <ul style="margin-left: 0.25in;">
                  <li>S&atilde;o Paulo, Brazil (GRU01)</li>
                  <li>Mumbai, India (BOM01)</li>
                  <li>Singapore (SIN01)</li>
                  <li>Tokyo, Japan (HND01)</li>
               </ul>
            </div>

         <p><strong>31 July 2016</strong>: four new servers deployed!</p>
            <div><ul style="margin-left: 0.25in;">
                <li>San Jose, California, USA (SJC01)</li>
                <li>Dublin, Ireland (DUB01)</li>
                <li>Frankfurt, Germany (FRA01)</li>
                <li>Sydney, Australia (SYD01)</li>
            </ul></div>

         <p><strong>30 July 2016</strong>: two new servers deployed!</p>
            <div>
            <ul style="margin-left: 0.25in;">
                <li>Ashburn, Virginia, USA (IAD01)</li>
                <li>The Dalles, Oregon, USA (PDX01)</li>
            </ul></div>

         <p><strong>22 May 2013</strong>: the SJC1 server has been delisted.</p>

         <p><strong>9 February 2013</strong>: the ORD2 server, which has been
            failing to serve NTP data for months now, has been fixed. Life's
            been a bit busy which was preventing me from getting around to 
            fixing it, but it's back now.</p>

         <p><strong>10 May 2012</strong>: the ORD2 server has moved within the 
            <a href="http://steadfast.net">Steadfast Networks</a> datacenter. Previously it was a colocated 
            physical server running FreeBSD. It is now a virtual 
            <a href="http://steadfast.net/services/cloudhosting.php">cloud-based server</a> running Ubuntu Linux. 
            This has a couple of impacts: 1) the service is likely to be even more robust than it has been thanks to 
            the fact that we have built-in hardware redundancy provided by the cloud; 2) IPv6 access for ORD2 is 
            no longer available; 3) the IPv4 address for ORD2 has changed (old address: 208.100.0.38; 
            new address: 50.31.2.213).  Assuming clients were configured to use the server's DNS hostname 
            (as they should be), this should have been a transparent change.
            </p>

         <p><strong>14 May 2011</strong>: NTP via IPv6 should now be available for 
            the Chicago server (ORD2). Please contact <a href="mailto:timekeeper@publicntp.net">
            timekeeper@publicntp.net</a> if any issues are encountered.</p>

         <p><strong>29 January 2011</strong>: the <a href="stats/">statistics</a> 
            page has been neglected for quite some time. The error graphs have 
            both been fixed and the usage stats for Chicago (ORD2) are back.
            I'm not sure when, if ever, the usage stats for Santa Clara (SJC1) will
            be back.</p>

         <p><strong>29 July 2009</strong>: When this project started in the 
            spring of 2008, the two currently-active servers (SJC1 and ORD2) 
            provided time service to roughly 300 active clients combined. As 
            of late July 2009 that number has grown to nearly 500, an
            increase of 60% in just 16 months.</p>

         <p><strong>25 July 2009</strong>: The 
            <a href="stats/usage-ord2.php">usage stats</a> for stratum2.ord2
            have been wrong for awhile. After finally getting a minute to 
            look into the problem, it turns out the service was a 
            "victim" of its own success.  If the monitoring program that
            ships with NTP tries to maintain stats when more than 600 people
            have used the service it dies.  I've switched to using the 
            very useful scripts provided by 
            <a href="http://www.midwestcs.com/scripts/ntp/index.html">Wayne
            Schlitt</a> and sanity has returned to the usage data.</p>

         <p><strong>20 June 2009</strong>: A bug in the NTP server when
            running on a 64-bit x86 version of FreeBSD was causing the ORD2 
            server to not be as accurate as it could/should be.  After 
            limiting the maximum time between server polls, ORD2's 
            UTC variance has been improved by an order of magnitude 
            (from +/- ~100 microseconds to +/- ~10 microseconds).</p>

         <p><strong>15 March 2008</strong>: The ord1 server in Chicago 
            has been delisted.</p> 

         <p><strong>13 February 2008</strong>: PublicNTP Project launched
            with one server in the San Francisco, California area and two
            servers in Chicago, Illinois.</p> 

      <h2>Inspirations</h2>

      <p>Open-access information systems designed/operated primarily for the 
            common good, such as the
      <a href="http://en.wikipedia.org/wiki/Global_Positioning_System">Global
      Positioning System</a> and the
      <a href="http://www.root-servers.org/">root servers</a> for the
      <a href="http://en.wikipedia.org/wiki/Domain_name_system">Domain Name
      System</a>.</p>


      <!--
      <h2>Statistics</h2>

         <p>Various <a href="stats/index.php">statistics</a> from the Project 
            servers, including usage and accuracy information.</p> 
      -->

      <h2>Delivery Mechanism</h2>

         <p>The project servers all support version 4 of the 
         <a href="http://en.wikipedia.org/wiki/Network_Time_Protocol">Network
         Time Protocol</a> served up by a version of the 
         <a href="http://ntp.isc.org">NTP daemon</a>, an open-source project
         hosted by the <a href="http://www.isc.org">Internet Systems
         Consortium</a>.</p> 

      <h2>Access Policy</h2>

         <p>There are no restrictions on using project servers. The only
            caveat is rate-limiting has been configured, so clients who
            query too often will be ignored until they back off some.</p>


      <div style="padding-top: 0.25in; text-align: center;">
         <hr style="width: 80%" />
         <p style="margin-bottom: 0.25in; font-size: 14px;">Copyright &copy; 
         2008-<?php echo date("Y"); ?> PublicNTP Project</p>
      
         <p>
            <a href="http://validator.w3.org/check?uri=referer"><img
               src="images/valid-xhtml10.png"
               alt="Valid XHTML 1.0 Strict" height="31" width="88"
               style="border: none" /></a>
            <a href="http://jigsaw.w3.org/css-validator/check/referer">
            <img 
               style="border:0; width:88px;height:31px"
               src="images/vcss"
               alt="Valid CSS!" /></a>

         </p>
      </div>

   </body>
</html>
