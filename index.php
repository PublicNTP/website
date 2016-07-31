<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
   <head>
      <meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
      <title>PublicNTP</title>
      <link rel="stylesheet" type="text/css" title="CSS" href="style.css" />
   </head>

   <body> 
      <h1>PublicNTP Project</h1>

      <p><em>Last updated</em>: <?php
         date_default_timezone_set( 'US/Eastern' );
         echo date("Y-m-j, g:ia T ", getlastmod()) .
            '(UTC ' . date('O', getlastmod()) . ')';
      ?>
      </p>

      <h2>Mission</h2>

      <p>
      The PublicNTP Project provides unrestricted access to no-cost sources 
        of highly-accurate time information as a public good.
      </p>

      <h2>Servers</h2>

      <table style="padding-left: 0.5in;">

         <tr>
            <td><strong>Hostname</strong></td>
            <td><strong>Geographic Location</strong></td>
            <td align="center"><strong>Timezone</strong></td>
            <td align="center"><strong>UTC Offset</strong></td>
            <td align="center"><strong>Live Date</strong></td>
            <td>Datacenter</td>
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
               <a href="http://aws.amazon.com">Amazon</a> AWS, US-West-2 region</td>
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
                ?></a>
            <td align="center"><?php
                echo date('O'); 
                ?>
            </td>
            <td align="center">2016-07-30</td>
            <td>
               <a href="http://aws.amazon.com">Amazon</a> AWS, US-East region</td>
            <td>&nbsp;</td>
         </tr>

      </table>

      <p><u>Notes:</u></p>
      <ul>
         <li>All project servers are proud to participate in the
         <a href="http://www.pool.ntp.org/">NTP Pool Project</a>.
         All are
         members of the <a href="http://www.pool.ntp.org/zone/@">global pool</a>,
         the <a href="http://www.pool.ntp.org/zone/north-america">North
         American</a> continent pool and the
         <a href="http://www.pool.ntp.org/zone/us">United States</a> country
         zone.</li>

         <li>All the project servers currently operate at NTP stratum two,
            meaning they synchronize across the network to 
            stratum one systems containing high-quality time sources such as GPS 
            or CDMA receivers. It's uncommon for project servers to vary from 
            UTC by more than 2-3 milliseconds (a millisecond is 0.001 seconds).

      </ul>

      <h2>News</h2>

         <p><strong>30 July 2016</strong>: two new servers have been deployed: one in the 
            Washington, DC metro area (IAD01), and one in the Portland, Oregon area (PDX01).</p>

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
